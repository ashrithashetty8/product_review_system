const express = require("express")
const router = express.Router()
const { ProductsController } = require("../controllers");

router
    .route("/")
    .get(ProductsController.getAllProducts)

module.exports = router;