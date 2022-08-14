import { body, validationResult } from "express-validator";
import PaginationParamsValidator from "../../validator/paginationParams";

export default class AddressValidator extends PaginationParamsValidator{
  static validateNewAddress() {
    return [
      body("street")
        .notEmpty()
        .withMessage("The street can't be null")
        .isString(),
      body("city").notEmpty().withMessage("The city can't be null").isString(),
      body("state")
        .notEmpty()
        .withMessage("The state can't be null")
        .isString(),
      body("zipCode")
        .notEmpty()
        .withMessage("The zipCode can't be null")
        .isInt(),
    ];
  }
  
}
