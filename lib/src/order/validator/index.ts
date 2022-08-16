import { body, validationResult } from "express-validator";
import Validator from "../../../core/validator";

class OrderValidator extends Validator {
   validateNewOrder() {
    return [
      body("customerId")
        .notEmpty()
        .withMessage("You need to pass the customer Id")
        .isString(),
      body("shippingAddressId").notEmpty().withMessage("You need to provide a shipping address id").isString(),
      body("products")
        .notEmpty()
        .withMessage("Products can't be empty")
        .isArray(),
    ];
  }
}
export default new OrderValidator();
