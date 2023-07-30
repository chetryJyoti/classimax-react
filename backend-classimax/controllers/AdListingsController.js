const AdListing = require("../models/AdListing");
const User = require("../models/User");
const Seller = require("../models/Seller");
const asyncHandler = require("express-async-handler");

// Fetch all AdListings by pagenumber
const getListing = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Get the page number from the query parameter (default: 1)
  const limit = 6; // Set the number of documents to fetch per page

  try {
    // Calculate the number of documents to skip based on the current page
    const skip = (page - 1) * limit;

    // Fetch the first 5 AdListings based on pagination
    const adListings = await AdListing.find({})
      .skip(skip)
      .limit(limit)
      .populate("user seller");

    // Get the total count of AdListing documents
    const totalCount = await AdListing.countDocuments();

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalCount / limit);

    res.status(200).json({
      page,
      totalPages,
      totalCount,
      adListings,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch AdListings",
      error: error.message,
    });
  }
});

// Create a new AdListing
const createListing = asyncHandler(async (req, res) => {
  const {
    user,
    seller,
    title,
    category,
    type,
    price,
    negotiable,
    desc,
    images,
    payment_option,
    name, // New seller details
    email, // New seller details
    number, // New seller details
    address, // New seller details
  } = req.body;

  // Ensure the user exists in the User model
  const existingUser = await User.findById(user);
  if (!existingUser) {
    return res.status(404).json({ message: "User not found" });
  }

  try {
    let existingSeller = null;

    // Check if the seller exists based on seller ID
    if (seller) {
      existingSeller = await Seller.findById(seller);
    } else {
      // Check if the seller exists based on seller details (name, email, number, address)
      existingSeller = await Seller.findOne({ name, email, number, address });
    }

    // If seller does not exist, create a new one
    if (!existingSeller) {
      existingSeller = await Seller.create({ name, email, number, address });
    }

    await AdListing.create({
      user,
      seller: existingSeller._id, // Use the ID of the existing or newly created seller
      title,
      category,
      type,
      price,
      negotiable,
      desc,
      images,
      payment_option,
    });

    res.status(201).json({ message: "Your listing added successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create the AdListing",
      error: error.message,
    });
  }
});

// Update an existing AdListing by ID
const updateListingById = asyncHandler(async (req, res) => {
  const {
    title,
    category,
    type,
    price,
    negotiable,
    desc,
    images,
    payment_option,
  } = req.body;
  const listingId = req.params.id;

  // Ensure the AdListing exists
  const existingListing = await AdListing.findById(listingId);
  if (!existingListing) {
    return res.status(404).json({ message: "AdListing not found" });
  }

  try {
    existingListing.title = title;
    existingListing.category = category;
    existingListing.type = type;
    existingListing.price = price;
    existingListing.negotiable = negotiable;
    existingListing.desc = desc;
    existingListing.images = images;
    existingListing.payment_option = payment_option;

    const updatedListing = await existingListing.save();
    res.status(200).json(updatedListing);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update the AdListing",
      error: error.message,
    });
  }
});

// Delete an AdListing by ID
const deleteListingById = asyncHandler(async (req, res) => {
  const listingId = req.params.id;

  try {
    const deletedListing = await AdListing.deleteOne({ _id: listingId });

    if (deletedListing.deletedCount === 0) {
      return res.status(404).json({ message: "AdListing not found" });
    }

    res.status(200).json({ message: "AdListing deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete the AdListing",
      error: error.message,
    });
  }
});

// Get an AdListing by ID
const getListingById = asyncHandler(async (req, res) => {
  const listingId = req.params.id;

  // Ensure the AdListing exists
  const adListing = await AdListing.findById(listingId).populate("user seller");
  if (!adListing) {
    return res.status(404).json({ message: "AdListing not found" });
  }

  res.status(200).json(adListing);
});

// Get all AdListings by User ID
const getAllListingByUser = asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  // Ensure the User exists
  const existingUser = await User.findById(userId);
  if (!existingUser) {
    return res.status(404).json({ message: "User not found" });
  }

  const adListings = await AdListing.find({ user: userId }).populate(
    "user seller"
  );
  res.status(200).json(adListings);
});

// Get all AdListings by Category name
const getAllListingByCategory = asyncHandler(async (req, res) => {
  const category = req.params.categoryName;
  console.log("categoryName:", category);

  try {
    const adListings = await AdListing.find({ category }).populate(
      "user seller"
    );
    console.log(adListings);

    if (adListings.length === 0) {
      return res
        .status(404)
        .json({ message: "AdListings not found for this category" });
    }

    res.status(200).json(adListings);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch AdListings by category",
      error: error.message,
    });
  }
});

//Get the count of listings in each category
const getCountOfListingsInEachCategory = asyncHandler(async (req, res) => {
  const categories = [
    "Laptops",
    "Iphones",
    "Androids",
    "Monitors",
    "Tvs",
    "Electronics",
    "BedTables",
  ];

  try {
    const categoryCounts = await AdListing.aggregate([
      {
        $match: {
          category: { $in: categories }, // Only include documents with categories in the 'categories' array
        },
      },
      {
        $group: {
          _id: "$category", // Group by the 'category' field
          count: { $sum: 1 }, // Calculate the count of listings in each category
        },
      },
    ]);

    // Construct the response data in the desired format
    const responseData = categoryCounts.map((item) => ({
      name: item._id,
      count: item.count,
    }));

    res.status(200).json(responseData);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get category counts",
      error: error.message,
    });
  }
});

module.exports = {
  getListing,
  createListing,
  updateListingById,
  deleteListingById,
  getListingById,
  getAllListingByUser,
  getAllListingByCategory,
  getCountOfListingsInEachCategory,
};
