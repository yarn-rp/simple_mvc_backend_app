import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

class MiddlewareValidator {
  handleValidationError(req: Request, res: Response, next: NextFunction) {
    const error = validationResult(req);
    if (!error.isEmpty) {
      return res.json(error);
    }
    return next();
  }
}
export default new MiddlewareValidator();
