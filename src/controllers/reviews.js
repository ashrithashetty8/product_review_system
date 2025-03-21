const { ReviewService } = require("../services")
const catchAsync = require("../utils/catchAsync")
const logger = require('../middlewares/logger');

// Create new Review
const addReview = catchAsync(async (req, res) => {
    try {
        const newReview = await ReviewService.addReview(req.body);
        logger.info("New Review Added")
        res.status(201).json({ success: true, result: newReview })
    } catch (error) {
        logger.error(`Failed to add new Review`)
        res.status(400).json({ success: false, message: 'Failed to add new Review' });
    }
})

// Get All Reviews
const getAllReviews = catchAsync(async (req, res) => {
    try {
        const reviews = await ReviewService.getAllReviews();
        logger.info("List of All Reviews")
        res.status(200).json({ success: true, message: "Success", result: reviews })
    } catch (error) {
        logger.error(`Failed to get all Reviews`)
        res.status(400).json({ success: false, message: 'Failed to get the Reviews' });
    }
})

// Get Reviews on ProductID
const getReviewsOnProductId = catchAsync(async (req, res) => {
    try {
        const reviews = await ReviewService.getReviewOnProductId(req.params.productId);
        logger.info("Reviews on Product Id")
        res.status(200).json({ success: true, message: "Success", result: reviews })
    } catch (error) {
        logger.error(`Failed to get Reviews for the given Product ID`)
        res.status(400).json({ success: false, message: 'Failed to get Reviews for the given ProductId' });
    }
})

// Get Top Rated Products
const getTopRatedProducts = catchAsync(async (req, res) => {
    try {
        const reviews = await ReviewService.getTopRatedProducts();
        logger.info("Top Rated Products")
        res.status(200).json({ success: true, message: "Success", result: reviews })
    } catch (error) {
        logger.error(`Failed to get Data`)
        res.status(400).json({ success: false, message: 'Failed to get Data' });
    }
})

module.exports = {
    addReview,
    getAllReviews,
    getReviewsOnProductId,
    getTopRatedProducts
}