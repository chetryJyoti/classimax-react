const mongoose = require("mongoose");

const adListingSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("AdListing", adListingSchema);
