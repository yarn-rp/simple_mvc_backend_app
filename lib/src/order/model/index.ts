import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  ManyToOne,
} from "typeorm";

import { Account } from "../../account/model";
import { Address } from "../../address/model";
import { OrderLineItem } from "../../order-line-item/model";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Account)
  customer: Account;

  @ManyToOne(() => Address)
  shippingAddress: Address;

  @Column()
  subtotal: number;

  @Column()
  taxes: number;

  @Column()
  total: number;

  @OneToMany(() => OrderLineItem, (OrderLineItem) => OrderLineItem.order)
  public orderLineItems!: OrderLineItem[];
}
