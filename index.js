const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const productRoute = require("./routes/product.route");

const PASSWORD = process.env.PASSWORD;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

mongoose
  .connect(
    `mongodb+srv://clefcodex:${PASSWORD}@backenddb.kiypk.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("Connected!");
    console.log();
    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
  })
  .catch((error) => console.log(error));
