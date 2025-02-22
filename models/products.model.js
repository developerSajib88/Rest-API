const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type: Number,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true,
    enum: {
      values: ["Electronics", "Clothing", "Books", "Beauty", "Other"],
      //message: "Category must be Electronics, Clothing, Books, Beauty, or Other"
    }
  },
  price:{
    type: Number,
    require: true,
    min: 10
  },
  stock:{
    type: Number,
    require: true,
    min: 10
  },
  description: {
    type: String,
    require: true
  },
  image:{
    type: String,
    require: true
  }
});


module.exports = mongoose.model("products", productSchema);
