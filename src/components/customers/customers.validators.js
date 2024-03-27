import { check } from "express-validator";

const customersValidator = [
  check("name", "Error con name")
    .exists()
    .withMessage("No se incluye la propiedad name")
    .notEmpty()
    .withMessage("El campo name no debe estar vacío")
    .isString()
    .withMessage("El valor del name debe ser una cadena")
    .isLength({ max: 100 })
    .withMessage("La longitud del name no debe exceder los 100 caracteres"),

  check("number", "Error con number")
    .exists()
    .withMessage("No se incluye la propiedad number")
    .notEmpty()
    .withMessage("El campo number no debe estar vacío")
    .isInt()
    .withMessage("El valor de number debe ser un número entero"),

  check("email", "Error con email")
    .exists()
    .withMessage("No se incluye la propiedad email")
    .notEmpty()
    .withMessage("El campo email no debe estar vacío")
    .isEmail()
    .withMessage(
      "El valor del email debe ser una dirección de correo electrónico válida"
    ),

  check("country", "Error con country")
    .exists()
    .withMessage("No se incluye la propiedad country")
    .notEmpty()
    .withMessage("El campo country no debe estar vacío")
    .isString()
    .withMessage("El valor del country debe ser una cadena")
    .isLength({ max: 30 })
    .withMessage("La longitud del country no debe exceder los 30 caracteres"),

  check("city", "Error con city")
    .exists()
    .withMessage("No se incluye la propiedad city")
    .notEmpty()
    .withMessage("El campo city no debe estar vacío")
    .isString()
    .withMessage("El valor del city debe ser una cadena")
    .isLength({ max: 30 })
    .withMessage("La longitud del city no debe exceder los 30 caracteres"),

  check("company", "Error con company")
    .optional()
    .isString()
    .withMessage("El valor de company debe ser una cadena")
    .isLength({ max: 100 })
    .withMessage("La longitud del company no debe exceder los 100 caracteres"),

  check("typeofproject", "Error con typeofproject")
    .exists()
    .withMessage("No se incluye la propiedad typeofproject")
    .notEmpty()
    .withMessage("El campo typeofproject no debe estar vacío")
    .isString()
    .withMessage("El valor del typeofproject debe ser una cadena")
    .isLength({ max: 30 })
    .withMessage(
      "La longitud del typeofproject no debe exceder los 30 caracteres"
    ),

  check("quote", "Error con quote")
    .exists()
    .withMessage("No se incluye la propiedad quote")
    .notEmpty()
    .withMessage("El campo quote no debe estar vacío")
    .isString()
    .withMessage("El valor del quote debe ser una cadena")
    .isLength({ max: 30 })
    .withMessage("La longitud del quote no debe exceder los 30 caracteres"),

  check("message", "Error con message")
    .optional()
    .isString()
    .withMessage("El valor de message debe ser una cadena"),

  // A partir de aquí puedes agregar más validadores si es necesario.
];

export default customersValidator;
