const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: {
      values: ["Electronics", "Clothing", "Books", "Beauty", "Other"],
      message: "Category must be Electronics, Clothing, Books, Beauty, or Other"
    }
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [10, "Price must be at least 10"]
  },
  stock: {
    type: Number,
    required: [true, "Stock quantity is required"],
    min: [10, "Stock must be at least 10"]
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
    trim: true
  },
  images: [
    { type: String, required: true },
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", productSchema);
