import express from "express";

import MiddlewareValidator from "../../middleware";
import AddressValidator from "../validator/addressValidator";
import AddressController from "../controller";

const router = express.Router();

router.post(
  "/address",
  AddressValidator.validateNewAddress(),
  MiddlewareValidator.handleValidationError,
  AddressController.createNewAAddress
);
router.get(
  "/address",
  // Validator.handleValidationError,
  AddressValidator.validatePaginationParams(),
  MiddlewareValidator.handleValidationError,
  AddressController.getAddresses
);

export default router;