import {Request, Response, NextFunction} from 'express';
import {validationResult} from 'express-validator';

export default class MiddlewareValidator {

    static handleValidationError(req: Request, res: Response, next: NextFunction){
        const error = validationResult(req);
        if(!error.isEmpty){
            return res.json(error);
        }
        return next();
    }
}