import { check, validationResult } from "express-validator";
import validateResult from "../../middlewares/validator.middleware.js";
import Users from "../../models/users.models.js";

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

  check("lastname", "Error con lastname")
    .exists()
    .withMessage("No se incluye la propiedad lastname")
    .notEmpty()
    .withMessage("El lastname no debe estar vacío")
    .isString()
    .withMessage("El valor del lastname debe ser una cadena")
    .isLength({ min: 2, max: 50 })
    .withMessage("La longitud del apellido debe ser entre 2 y 50 caracteres")
    .matches(/^[a-zA-Z\s]*$/)
    .withMessage("El lastname solo acepta letras"),

  check("email", "Error con email")
    .exists()
    .withMessage("No se incluye la propiedad email")
    .notEmpty()
    .withMessage("El email no debe estar vacío")
    .isEmail()
    .withMessage(
      "El valor del email debe ser una dirección de correo electrónico válida"
    )
    .custom(async (value) => {
      const user = await Users.findOne({ email: value });
      if (user) {
        throw new Error("El correo electrónico ya está registrado");
      }
    }),

  check("password", "Error con password")
    .exists()
    .withMessage("No se incluye la propiedad password")
    .notEmpty()
    .withMessage("El password no debe estar vacío")
    .isString()
    .withMessage("El valor del password debe ser una cadena")
    .isLength({ min: 8, max: 50 })
    .withMessage(
      "La longitud de la contraseña debe ser entre 8 y 50 caracteres"
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{8,}$/
    )
    .withMessage(
      "El password debe ser mínimo 8 caracteres, una mayúscula, una minúscula y un carácter especial"
    ),

  check("description", "Error con description")
    .exists()
    .withMessage("No se incluye la propiedad description")
    .notEmpty()
    .withMessage("La description no debe estar vacía")
    .isString()
    .withMessage("El valor de description debe ser una cadena")
    .isLength({ min: 1, max: 100 })
    .withMessage(
      "La longitud de la descripción debe ser entre 1 y 100 caracteres"
    ),

  check("nickName", "Error con nickName")
    .optional()
    .isString()
    .withMessage("El valor de nickName debe ser una cadena")
    .isLength({ max: 10 })
    .withMessage("La longitud del nickName no debe exceder los 10 caracteres"),

  check("degree", "Error con degree")
    .exists()
    .withMessage("No se incluye la propiedad degree")
    .notEmpty()
    .withMessage("El degree no debe estar vacío")
    .isString()
    .withMessage("El valor del degree debe ser una cadena")
    .isLength({ min: 1, max: 20 })
    .withMessage("La longitud del degree debe ser entre 1 y 20 caracteres"),

  check("country", "Error con country")
    .exists()
    .withMessage("No se incluye la propiedad country")
    .notEmpty()
    .withMessage("El country no debe estar vacío")
    .isString()
    .withMessage("El valor del country debe ser una cadena")
    .isLength({ min: 1, max: 20 })
    .withMessage("La longitud del country debe ser entre 1 y 20 caracteres"),

  // a partir de arriba de esta linea vas a hacer los validadores faltantes.
  validateResult,

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const loginValidation = [
  check("email", "Error con email")
    .exists()
    .withMessage("No se incluye la propiedad email")
    .notEmpty()
    .withMessage("El email no debe estar vacío")
    .isEmail()
    .withMessage(
      "El valor del email debe ser una dirección de correo electrónico válida"
    ),

  check("password", "Error con password")
    .exists()
    .withMessage("No se incluye la propiedad password")
    .notEmpty()
    .withMessage("El password no debe estar vacío")
    .isString()
    .withMessage("El valor del password debe ser una cadena"),

  // a partir de arriba de esta linea vas a hacer los validadores faltantes.
  validateResult,

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export { registerUserValidator, loginValidation };
