const mongoose = require("mongoose");

// Define the schema for the seller information
const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true },
  address: { type: String, required: true },
});

// Create the Seller model
module.exports  = mongoose.model("Seller", sellerSchema);

