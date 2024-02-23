import { validationResult } from "express-validator";

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    next();
  } catch (error) {
    next({
      status: 400,
      error: "Invalid data",
      message: error.array().map((error) => error.msg),
    });
  }
};

export default validateResult;