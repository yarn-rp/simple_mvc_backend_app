import express from "express";

import MiddlewareValidator from "../../../core/middleware";
import AddressValidator from "../validator/index.ts";
import AddressController from "../controller";

const router = express.Router();

router.post(
  "/address",
  AddressValidator.validateNewAddress(),
  MiddlewareValidator.handleValidationError,
  AddressController.createNewAddress
);
router.get(
  "/address",
  AddressValidator.validatePaginationParams(),
  MiddlewareValidator.handleValidationError,
  AddressController.getAddresses
);

export default router;
