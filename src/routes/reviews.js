const express = require("express")
const router = express.Router()
const { ReviewController } = require("../controllers");
const { validateReview } = require('../joi-validation/reviews');

router
    .route("/")
    .post(validateReview, ReviewController.addReview)
    .get(ReviewController.getAllReviews)

router
    .route("/top-rated")
    .get(ReviewController.getTopRatedProducts)

router
    .route("/:productId")
    .get(ReviewController.getReviewsOnProductId)

module.exports = router;