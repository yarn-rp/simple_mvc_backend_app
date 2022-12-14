import express from "express";
import addressFeature from "./app/address";
import accountFeature from "./app/account";
import productFeature from "./app/product";
import orderFeature from "./app/order";
import cors from 'cors';



//TODO: SETUP SERVER CONFIG VARIABLES FROM CONFIG FILE (.env)
const port = 9000;
const apiVersion = "v1";
const apiBaseURL = `/api/${apiVersion}`;

const app = express();
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:'];

const options: cors.CorsOptions = {
  // origin: allowedOrigins
};
app.use(cors(options));

app.use(express.json());

// Place in here all api features
const apiFeatures: express.Router[] = [
  addressFeature,
  accountFeature,
  productFeature,
  orderFeature,
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
