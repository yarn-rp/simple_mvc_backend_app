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
  public orderLineItemId!: string;

  @Column()
  public quantity: number;

  @Column()
  public price: number;

  @Column()
  public productId!: string;

  @Column()
  public orderId!: string;

  @ManyToOne(() => Product, (product) => product.orderLineItems)
  public product!: Product;

  @ManyToOne(() => Order, (order) => order.orderLineItems)
  public order!: Order;
}
