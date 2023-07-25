const mongoose = require("mongoose");

const adListingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", //User model for sellers
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Seller",
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
    type: {
      type: String,
      enum: ["personal", "business"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    negotiable: {
      type: Boolean,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    payment_option: {
      type: String,
      enum: ["regular", "top_featured", "urgent"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AdListing", adListingSchema);
