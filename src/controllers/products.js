const { ProductsService } = require("../services")
const catchAsync = require("../utils/catchAsync")
const logger = require('../middlewares/logger');

// Get All Products
const getAllProducts = catchAsync(async (req, res) => {
    try {
        const products = await ProductsService.getAllProducts();
        logger.info("List of All Products")
        res.status(200).json({ success: true, message: "Success", result: products })
    } catch (error) {
        logger.error(`Failed to get all Products`)
        res.status(400).json({ success: false, message: 'Failed to get the Products' });
    }
})

module.exports = {
    getAllProducts
}