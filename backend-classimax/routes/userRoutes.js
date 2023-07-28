const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// verification of user
const verifyJWT = require("../middleware/verifyJWT");

//normal users can create and update the users 
router
  .route("/")
  .post(usersController.createNewUser)
  .patch(usersController.updateUser);

//but they cannot delete the users and see all the users
router.use(verifyJWT);
router
  .route("/")
  .get(usersController.getAllUsers)
  .delete(usersController.deleteUser);

module.exports = router;
