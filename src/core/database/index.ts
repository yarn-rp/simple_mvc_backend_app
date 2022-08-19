import { Account } from "../../app/account/model";
import { Address } from "../../app/address/model";
import { Product } from "../../app/product/model";
import { DataSource } from "typeorm";
import { Order } from "../../app/order/model";
import { OrderLineItem } from "../../app/order-line-item/model";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities: [Address, Account,Product, Order, OrderLineItem],
  // logging: true,
  // Synchronize schema with database
  // Use in development or on first run only; may result in data loss!
  synchronize: true 
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
