// This is for creating default products when Server runs for the first time.

const { Products } = require('../models'); // Import your Product model
const defaultProducts = require('../sample-data/products.json'); // Load default products

async function initializeDefaultProducts() {
    try {
        // Sync the Products table (create it if it doesn't exist)
        await Products.sync({ force: false });

        // Check if any products already exist in the database
        const count = await Products.count();
        if (count === 0) {
            // Insert default products if the database is empty
            await Products.bulkCreate(defaultProducts);
            console.log('Default products inserted successfully');
        } else {
            console.log('Default products already exist');
        }
    } catch (err) {
        console.error('Error initializing default products:', err.message);
    }
}

module.exports = initializeDefaultProducts;