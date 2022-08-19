import { body, validationResult } from "express-validator";
import Validator from "../../../core/validator";

class AddressValidator extends Validator {
  validateNewAddress() {
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
export default new AddressValidator();
