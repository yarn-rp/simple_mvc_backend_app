import { query } from "express-validator";

export default class PaginationParamsValidator {
  static validatePaginationParams() {
    return [
      query("take")
        .isInt({ min: 1, max: 16 })
        .withMessage("Take should be a number between 1-16 ")
        .optional(),
      query("skip")
        .isInt({ min: 1, max: 16 })
        .withMessage("Skip should be a number between 1-16 ")
        .optional(),
    ];
  }
}
