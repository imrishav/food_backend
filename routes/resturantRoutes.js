const express = require("express");

const resturantController = require("../controllers/resturantController");

const router = express.Router();

router
  .route("/")
  .get(resturantController.getAllRestro)
  .post(resturantController.createResturant);

router
  .route("/:id")
  .get(resturantController.getRestroById)
  .patch(resturantController.updateResturant)
  .delete(resturantController.deleteRestro);

module.exports = router;
