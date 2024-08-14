const mongoose = require("mongoose");

// Define a schema for the product
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  price: { type: Number, default: null }, // Optional field with a default value of null
  ratings: { type: Number, default: null }, // Optional field with a default value of null
  totalRatings: { type: Number, default: null }, // Optional field with a default value of null
  productUrl: { type: String, required: true },
});

// Create and export the model
module.exports = mongoose.model("Product", productSchema);
// iska plural form database mai khud ba khud hee store ho jayga
// ab mai Products naam ke database mai saare elements csv file seah upload kar dunga aur fir kaam ho jayga 

