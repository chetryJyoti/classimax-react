const express = require("express");
const router = express.Router();
const AdListingsController = require("../controllers/AdListingsController");

// verification of user
// const verifyJWT = require("../middleware/verifyJWT")

// router.use(verifyJWT)
router
  .route("/")
  .get(AdListingsController.getListing)
  .post(AdListingsController.createListing);


router
  .route("/categoryCounts")
  .get(AdListingsController.getCountOfListingsInEachCategory);

router
  .route("/:id")
  .get(AdListingsController.getListingById)
  .patch(AdListingsController.updateListingById)
  .delete(AdListingsController.deleteListingById);

router.route("/user/:userId").get(AdListingsController.getAllListingByUser);

router
  .route("/category/:categoryName")
  .get(AdListingsController.getAllListingByCategory);


module.exports = router;
