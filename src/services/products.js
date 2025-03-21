const { Products } = require("../models")
const ApiError = require('../utils/api-error');

const getAllProducts = async () => {
    const products = await Products.findAll({
        where: {
            is_deleted: false,
        },
    });
    if (!products || products.length === 0) {
        throw new ApiError(404, "Products Not Found");
    }
    return products;
};

module.exports = {
    getAllProducts
}