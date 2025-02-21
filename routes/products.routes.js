const express = require("express");
const { getAllProducts, updateProduct, deleteProduct, addProduct } = require("../controllers/products.controllers");
const router = express.Router();

router.get("/all",getAllProducts);
router.post("/add", addProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;