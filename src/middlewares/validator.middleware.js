// Importar validationResult de express-validator
import { validationResult } from 'express-validator';

// Middleware validateResult
export const validateResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
