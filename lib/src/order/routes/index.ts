import express from "express";

import MiddlewareValidator from "../../../core/middleware";
import OrderValidator from "../validator";
import OrderController from "../controller";

const router = express.Router();

router.post(
  "/order",
  OrderValidator.validateNewOrder(),
  MiddlewareValidator.handleValidationError,
  OrderController.createOrder
);
router.get(
  "/order",
  OrderValidator.validatePaginationParams(),
  MiddlewareValidator.handleValidationError,
  OrderController.getOrders
);

export default router;
