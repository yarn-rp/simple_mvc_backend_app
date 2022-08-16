import express from "express";

import MiddlewareValidator from "../../../core/middleware";
import ProductValidator from "../validator";
import ProductController from "../controller";

const router = express.Router();

router.post(
  "/product",
  ProductValidator.validateNewProduct(),
  MiddlewareValidator.handleValidationError,
  ProductController.createProduct
);
router.get(
  "/product",
  ProductValidator.validatePaginationParams(),
  MiddlewareValidator.handleValidationError,
  ProductController.getProducts
);

export default router;
