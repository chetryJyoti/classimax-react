const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("Seller", sellerSchema);
