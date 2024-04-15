const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv/config');
const api = process.env.API_URL;

app.use(cors());
app.options('*', cors())

const productsRouter = require('./routers/products');
const { Product } = require("./models/product");

//middleware
app.use(express.json());

//Routers
app.use(api+'/products', productsRouter);

//Database
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Database connection is ready");
  })
  .catch((err) => {
    console.log(err);
  });

//Server
app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});
