import { check, validationResult } from "express-validator";
import validateResult from "../../middlewares/validator.middleware.js";

const registerUserValidator = [
  check("firstname", "Error con firstname")
    .exists()
    .withMessage("No se incluye la propiedad firstname")
    .notEmpty()
    .withMessage("El firstname no debe estar vacio")
    .isString()
    .withMessage("El valor del firstname debe ser string")
    .isLength({ min: 2, max: 50 })
    .withMessage("La longitud del nombre debe ser entre 2 y 50 caracteres")
    .matches(/^[a-zA-Z\s]/)
    .withMessage("El firstname solo acepta letras"),
  
  // a partir de arriba de esta linea vas a hacer los validadores faltantes.
  validateResult,
];

const loginValidation = [


  
  // a partir de arriba de esta linea vas a hacer los validadores faltantes.
  validateResult,
];

export { registerUserValidator, loginValidation };