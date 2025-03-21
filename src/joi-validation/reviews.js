const Joi = require('joi');

// Review validation schema
const reviewSchema = Joi.object({
    productId: Joi.string().uuid().required(), // Ensures if valid UUID
    rating: Joi.number().integer().min(1).max(5).required(), // Rating between 1-5
    comment: Joi.string().max(4).optional(), // Max 500 characters
});

// Middleware to validate review input
const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({ errors: error.details.map(err => err.message) });
    }
    next();
};

module.exports = { validateReview };