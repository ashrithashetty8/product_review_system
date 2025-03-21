const express = require('express');

const reviewRoute = require('./reviews');
const productRoute = require('./products')

const router = express.Router();

const defaultRoutes = [
    {
        path: '/reviews',
        route: reviewRoute,
    },
    {
        path: '/products',
        route: productRoute
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});


module.exports = router;
