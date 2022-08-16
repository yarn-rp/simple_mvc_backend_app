import { body } from "express-validator";
import PaginationParamsValidator from "../../../core/validator/paginationParams";

class AccountValidator extends PaginationParamsValidator {
  validateNewAccount() {
    return [
      body("name")
        .notEmpty()
        .withMessage("The name can't be null")
        .isString(),
      body("phone").notEmpty().withMessage("The phone can't be null").isString(),
      body("address_id")
        .notEmpty()
        .withMessage("address_id can't be null")
        .isUUID()
        .withMessage('Not valid UUID'),
    ];
  }
}
export default new AccountValidator();
