import { check } from "express-validator";

const projectsValidator = [
  check("imgLogo", "Error con imgLogo")
    .exists()
    .withMessage("No se incluye la propiedad imgLogo")
    .notEmpty()
    .withMessage("El campo imgLogo no debe estar vacío"),

  check("name", "Error con name")
    .exists()
    .withMessage("No se incluye la propiedad name")
    .notEmpty()
    .withMessage("El campo name no debe estar vacío")
    .isString()
    .withMessage("El valor del name debe ser una cadena")
    .isLength({ max: 50 })
    .withMessage("La longitud del name no debe exceder los 50 caracteres"),

  check("url", "Error con url")
    .exists()
    .withMessage("No se incluye la propiedad url")
    .notEmpty()
    .withMessage("El campo url no debe estar vacío"),

  check("description", "Error con description")
    .optional()
    .isString()
    .withMessage("El valor de description debe ser una cadena")
    .isLength({ max: 200 })
    .withMessage(
      "La longitud de description no debe exceder los 200 caracteres"
    ),

  check("workers", "Error con workers")
    .exists()
    .withMessage("No se incluye la propiedad workers")
    .notEmpty()
    .withMessage("El campo workers no debe estar vacío")
    .isInt()
    .withMessage("El valor de workers debe ser un número entero"),

  check("rate", "Error con rate")
    .optional()
    .isInt()
    .withMessage("El valor de rate debe ser un número entero"),
];

export default projectsValidator;
