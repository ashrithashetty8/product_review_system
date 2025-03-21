const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const timeout = require('connect-timeout');
const routes = require('./src/routes');
const { errorConverter } = require('./src/middlewares/error');
const ApiError = require('./src/utils/api-error');

const app = express();

app.use(helmet());
app.use(express.json());

// enable cors
app.use(cors());
app.options('*', cors());
app.use(timeout('60s'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    return next();
});

// v1 api routes
app.get('/v1', (req, res) => {
    res.send("Welcome");
});

// app.use(routes);
app.use('/', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(404, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

module.exports = app;