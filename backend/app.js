const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require('ejs');
const cors = require('cors');
require('dotenv/config');
const api = process.env.API_URL;

app.set('view engine', 'ejs')
app.use(express.static("views"));

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

  app.get('/', async (req, res) => {
    try {
      const products = await Product.find({});
      res.render('index', {
        productsList: products
      });
    } catch (error) {
      console.error('Error retrieving products:', error);
      res.status(500).send('Internal Server Error');
    }
  });

//Server
app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});
