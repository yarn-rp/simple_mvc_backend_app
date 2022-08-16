import express from "express";
import addressFeature from "./src/address";
import accountFeature from "./src/account";
import productFeature from "./src/product";

// SETUP SERVER CONFIG VARIABLES FROM CONFIG FILE (.env)
const port = 9000;
const apiVersion = "v1";
const apiBaseURL = `/api/${apiVersion}`;

const app = express();

app.use(express.json());

// Place in here all api features
const apiFeatures: express.Router[] = [
  addressFeature,
  accountFeature,
  productFeature,
];

// Use feature function. Includes all routes from feature Router to the app
const useFeature = (baseUrl: string, feature: express.Router): void => {
  app.use(baseUrl, feature);
};

const useAPIFeature = (feature: express.Router) =>
  useFeature(apiBaseURL, feature);

apiFeatures.forEach(useAPIFeature);

app.listen(port, () => {
  console.log(`Server is running in port : ${port}`);
});
