const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('./sequelize');
const { Products } = require('./index')

const Review = sequelize.define('Review', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    productId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Products,
            key: 'id',
        },
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    },
    comment: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    timestamps: true,
    tableName: 'review',
});


Review.beforeCreate((review) => {
    review.id = uuidv4();
});

sequelize.sync();

module.exports = Review;