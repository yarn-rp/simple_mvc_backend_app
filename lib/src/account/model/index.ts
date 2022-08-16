import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Address } from "../../address/model";

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @ManyToOne((type) => Address, { cascade: true,nullable: false })
  address: Address;
}
