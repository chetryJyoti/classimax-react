const express = require("express");
const router = express.Router();
const AdListingsController = require('../controllers/AdListingsController');


router.route('/')
  .get(AdListingsController.getListing)
  .post(AdListingsController.createListing);

router.route('/:id')
  .get(AdListingsController.getListingById)
  .patch(AdListingsController.updateListingById)
  .delete(AdListingsController.deleteListingById);

router.route('/user/:userId')
  .get(AdListingsController.getAllListingByUser);

module.exports = router;
