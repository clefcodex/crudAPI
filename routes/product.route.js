const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");


// create a product
router.post("/", createProduct);

// Read all products
router.get("/", getProducts);

// read a single product
router.get("/:id", getProduct);

// update a single product
router.put("/:id", updateProduct);

// delete a single product
router.delete("/:id", deleteProduct);

module.exports = router;
