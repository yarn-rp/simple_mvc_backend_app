import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OrderLineItem } from "../../order-line-item/model";
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  amount_on_stock: number;

  @Column()
  image_url: string;

  @OneToMany(() => OrderLineItem, (OrderLineItem) => OrderLineItem.product)
  public orderLineItems!: OrderLineItem[];
}
