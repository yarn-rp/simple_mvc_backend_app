import express from "express";

import MiddlewareValidator from "../../../core/middleware";
import AccountValidator from "../validator";
import AccountController from "../controller";

const router = express.Router();

router.post(
  "/account",
  AccountValidator.validateNewAccount(),
  MiddlewareValidator.handleValidationError,
  AccountController.createAccount
);
router.get(
  "/account",
  AccountValidator.validatePaginationParams(),
  MiddlewareValidator.handleValidationError,
  AccountController.getAccounts
);

export default router;
