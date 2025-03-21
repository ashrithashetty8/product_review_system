const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('./sequelize');

const Products = sequelize.define('Products', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    timestamps: true,
    tableName: 'products',
});


Products.beforeCreate((products) => {
    products.id = uuidv4();
});

sequelize.sync();

module.exports = Products;