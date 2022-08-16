import { param, query } from "express-validator";

export default abstract class IdParamValidator {
  validatePaginationParams() {
    return [
      param("id").notEmpty().withMessage("You need to specify an id")
    ];
  }
}
