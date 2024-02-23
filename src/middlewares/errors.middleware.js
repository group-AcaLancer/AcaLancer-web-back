const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
};

const notFoundErrorHandler = (req, res, next) => {
  res.status(404).send("Resource Not Found");
};

const jwtErrorHandler = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("Unauthorized");
  } else {
    next(err);
  }
};

const ormErrorHandler = (err, req, res, next) => {
  if (err.name === "SequelizeDatabaseError") {
    res.status(500).json({ error: "Error de base de datos" });
  } else {
    next(err);
  }
};

const errorLogger = (err, req, res, next) => {
  console.error("Error registrado:", err);
  next(err);
};
const getError = (req, res, next) => {
  try {
    const error = new Error("Este es un error de ejemplo");
    throw error;
  } catch (error) {
    console.error("Error obtenido:", error);
    res.status(500).send("Error obtenido: " + error.message);
  }
};

export default {
  errorHandler,
  notFoundErrorHandler,
  jwtErrorHandler,
  ormErrorHandler,
  errorHandler,
  errorLogger,
  getError,
};
