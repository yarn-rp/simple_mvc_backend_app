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
router.get(
  "/account/:id",
  AccountValidator.validateIdParams(),
  MiddlewareValidator.handleValidationError,
  AccountController.getAccountById
);

export default router;
