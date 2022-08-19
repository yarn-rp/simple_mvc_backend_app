import { body } from "express-validator";
import Validator from "../../../core/validator";

class AccountValidator extends Validator {
  validateNewAccount() {
    return [
      body("name").notEmpty().withMessage("The name can't be null").isString(),
      body("phone")
        .notEmpty()
        .withMessage("The phone can't be null")
        .isString(),
      body("imageUrl")
        .notEmpty()
        .isURL()
        .withMessage("imageUrl should be a valid url"),
      body("address_id")
        .notEmpty()
        .withMessage("address_id can't be null")
        .isUUID()
        .withMessage("Not valid UUID"),
    ];
  }
}
export default new AccountValidator();
