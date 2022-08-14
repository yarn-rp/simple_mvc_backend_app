import express, { Request, Response } from "express";
import database from "./config/database.config";

import addressFeature from "./address";

database.sync().then(() => {
  console.log("Connected to database");
});

const port = 9000;
const apiVersion = 'v1';

const app = express();

app.use(express.json());

app.use(`/api/${apiVersion}`, addressFeature);

app.listen(port, () => {
  console.log(`Server is running in port : ${port}`);
});
