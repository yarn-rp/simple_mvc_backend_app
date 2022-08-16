import { param, query } from "express-validator";

export default abstract class Validator {
  public validateIdParams() {
    return [
      param("id").notEmpty().withMessage("You need to specify an id")
    ];
  }
    public validatePaginationParams() {
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
