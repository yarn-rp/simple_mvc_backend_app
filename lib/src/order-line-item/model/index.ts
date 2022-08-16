import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Order } from "../../order/model";
import { Product } from "../../product/model";

@Entity()
export class OrderLineItem {
  @PrimaryGeneratedColumn()
  public orderLineItemId!: number;

  @Column()
  public quantity: number;

  @Column()
  public price: number;

  @Column()
  public productId!: number;

  @Column()
  public orderId!: number;

  @ManyToOne(() => Product, (product) => product.orderLineItems)
  public product!: Product;

  @ManyToOne(() => Order, (order) => order.orderLineItems)
  public order!: Order;
}
