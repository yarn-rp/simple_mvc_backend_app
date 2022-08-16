import { body } from "express-validator";
import PaginationParamsValidator from "../../../core/validator/paginationParams";

class ProductValidator extends PaginationParamsValidator {
  validateNewProduct() {
    return [
      body("name").notEmpty().withMessage("The name can't be null").isString(),
      body("price")
        .notEmpty()
        .withMessage("Price can't be null")
        .isNumeric()
        .withMessage("Price should be a number"),
      body("amount")
        .notEmpty()
        .withMessage("Amount can't be null")
        .isInt()
        .withMessage("Amount should be a an integer"),
      body("imageUrl")
        .notEmpty()
        .withMessage("imageUrl can't be null")
        .isURL()
        .withMessage("ImageUrl is not a valid url"),
    ];
  }
}
export default new ProductValidator();
