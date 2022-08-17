import express from "express";

import MiddlewareValidator from "../../../core/middleware";
import OrderValidator from "../validator";
import OrderController from "../controller";

const router = express.Router();

router.post(
  "/orders",
  OrderValidator.validateNewOrder(),
  MiddlewareValidator.handleValidationError,
  OrderController.createOrder
);
router.get(
  "/orders",
  OrderValidator.validatePaginationParams(),
  MiddlewareValidator.handleValidationError,
  OrderController.getOrders
);

router.get(
  "/orders/:id",
  OrderValidator.validateIdParams(),
  MiddlewareValidator.handleValidationError,
  OrderController.getOrderById
);

export default router;
