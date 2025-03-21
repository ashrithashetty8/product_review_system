const { Reviews } = require("../models")
const ApiError = require('../utils/api-error');
const sequelize = require('../models/sequelize');

// Add a new Review
const addReview = async (reviewBody) => {
    const newReview = await Reviews.create(reviewBody)
    return newReview
}

// Get Review on ProductID
const getReviewOnProductId = async (productId) => {
    const review = await Reviews.findOne({
        where: {
            productId: productId,
            is_deleted: false
        },
    });
    if (!review) {
        throw new ApiError(404, "Review Not Found");
    }
    return review;
};


// Get All Reviews
const getAllReviews = async () => {
    const reviews = await Reviews.findAll({
        where: {
            is_deleted: false,
        },
    });
    if (!reviews || reviews.length === 0) {
        throw new ApiError(404, "Reviews Not Found");
    }
    return reviews;
};

// Get the top rated Products
const getTopRatedProducts = async () => {
    const query = `
    SELECT 
        productId, 
        AVG(rating) AS averageRating
    FROM 
        review
    GROUP BY 
        productId
    ORDER BY 
        averageRating DESC
    LIMIT 3;
`;

    // Execute the raw SQL query
    const [getTopRatedProducts] = await sequelize.query(query);
    if (!getTopRatedProducts || getTopRatedProducts.length === 0) {
        throw new ApiError(404, "Reviews Not Found")
    }
    return getTopRatedProducts
}

module.exports = {
    addReview,
    getReviewOnProductId,
    getAllReviews,
    getTopRatedProducts
}