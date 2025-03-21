const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('products-systems', '', '', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'products-systems.db',
});

module.exports = sequelize;