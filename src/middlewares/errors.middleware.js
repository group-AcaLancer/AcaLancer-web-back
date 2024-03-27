import fs from "node:fs/promises";
import path from "node:path";
import { ConnectionError, ValidationError, DatabaseError } from "sequelize";

const getError = (req, res, next) => {
  const { body, url, method } = req;
  console.log(body);
  const formatBody = body ? JSON.stringify(body) : null;
  const { status, ...error } = err;
  return (
    `req: ${method} ${url} body: ${formatBody} \nres: status: ${status}, ${JSON.stringify(
      error
    )} ` + "\n\n"
  );
};

const errorLogger = (err, req, res, next) => {
  const date = new Date();
  const hora = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const day = date.toLocaleString("es-ES", { day: "numeric" });
  const month = date.toLocaleString("es-ES", { month: "numeric" });
  console.error(err);
  const filePath = path.join(__dirname, `../logs/${month}-${day}-logs.txt`);
  fs.appendFile(
    filePath,
    `===================ERROR ${hora}====================\n`
  );
  fs.appendFile(filePath, getError(req, err, res));
  next(err);
};

const ormErrorHandler = (err, req, res, next) => {
  if (err instanceof ConnectionError) {
    return res.status(409).json({
      error: "Database connection error",
      message: err.name,
    });
  }
  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: err.name,
      message: err?.original?.detail,
      errors: err.errors,
    });
  }
  if (err instanceof DatabaseError) {
    return res.status(409).json({
      error: err.name,
      message: err.message,
      errors: err.errors,
    });
  }
  next(err);
};

const jwtErrorHandler = (err, req, res, next) => {
  const jwtErrors = ["TokenExpiredError", "JsonWebTokenError"];
  if (jwtErrors.includes(err.name)) {
    return res.status(401).json({
      error: err.name,
      message: err.message,
    });
  }
  next(err);
};

const errorHandler = (err, req, res, next) => {
  const { status, ...error } = err;
  res.status(status || 500).json(error);
};

const notFoundErrorHandler = (req, res, next) => {
  res.status(404).send("Resource Not Found");
};

export {
  getError,
  errorLogger,
  ormErrorHandler,
  jwtErrorHandler,
  errorHandler,
  notFoundErrorHandler,
};
