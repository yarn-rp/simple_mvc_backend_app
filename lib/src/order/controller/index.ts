import e, { Request, Response } from "express";
import { Order } from "../model";
import datasource from "../../../core/database";
import { Product } from "../../product/model";
import { OrderLineItem } from "../../order-line-item/model";

const TAXES_RATE = 7;

class OrderController {
  async createOrder(req: Request, res: Response) {
    try {
      const productListJson: [] = req.body.products;

      const productListEntities: [Product | null, Number][] = await Promise.all(
        productListJson.map(async (e) => [
          await datasource.manager.findOne(Product, {
            where: {
              id: e["productId"],
            },
          }),
          Number(e["quantity"]),
        ])
      );

      const subtotal: number = productListEntities
        .map((e) => e[0]!.price * Number(e[1]))
        .reduce((a, b) => a + b);

      const taxes = (TAXES_RATE / 100) * subtotal;
      const total = subtotal + taxes;

      const entity = datasource.manager.create<Order>(Order, {
        ...req.body,
        ...{
          subtotal: subtotal,
          taxes: taxes,
          total: total,
        },
      });
      var record = await datasource.manager.save(entity);
      try {
        // TODO create Order line items
        const _orderLineItems: OrderLineItem[] =
          productListEntities.map<OrderLineItem>((productTuple) =>
            datasource.manager.create<OrderLineItem>(OrderLineItem, {
              order: entity,
              orderId: entity.id,
              product: productTuple[0] as Product,
              quantity: productTuple[1] as number,
              price:
                (productTuple[0] as Product).price *
                (productTuple[1] as number),
            })
          );
        const orderLineSaved = await Promise.all(
          _orderLineItems.map((e) => datasource.manager.save<OrderLineItem>(e))
        );

        record.orderLineItems = orderLineSaved;

        record = await datasource.manager.save(record);

        return res.json({ record, msg: "Order successfully created" });
      } catch (error) {
        datasource.manager.remove(record);
        return res.json({
          msg: `There was an error creating the Order: ${e}`,
          status: 500,
        });
      }
    } catch (e) {
      return res.json({
        msg: `There was an error creating the Order: ${e}`,
        status: 500,
      });
    }
  }
  async getOrders(req: Request, res: Response) {
    try {
      const take = (req.query?.take ?? 10) as number | undefined;
      const skip = req.query?.skip as number | undefined;

      const orders = await datasource.manager.find(Order, {
        skip: skip,
        take: take,
      });
      return res.json(orders);
    } catch (e) {
      return res.json({
        msg: `There was an error fetching the products: ${e}`,
        status: 500,
      });
    }
  }
}

export default new OrderController();
