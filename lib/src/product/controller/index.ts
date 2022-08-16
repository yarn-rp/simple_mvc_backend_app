import { Request, Response } from "express";
import { Product } from "../model";
import datasource from "../../../core/database";

class ProductController {
  async createProduct(req: Request, res: Response) {
    try {
      const entity = datasource.manager.create<Product>(Product, {
        ...req.body,
      });
      const record = await datasource.manager.save(entity);
      return res.json({ record, msg: "Product successfully created" });
    } catch (e) {
      return res.json({
        msg: `There was an error creating the product: ${e}`,
        status: 500,
      });
    }
  }
  async getProducts(req: Request, res: Response) {
    try {
      const take = (req.query?.take ?? 10) as number | undefined;
      const skip = req.query?.skip as number | undefined;

      const products = await datasource.manager.find(Product, {
        skip: skip,
        take: take,
      });
      return res.json(products);
    } catch (e) {
      return res.json({
        msg: `There was an error fetching the products: ${e}`,
        status: 500,
      });
    }
  }
}

export default new ProductController();
