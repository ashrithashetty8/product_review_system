const sqlite3 = require('sqlite3').verbose();
const http = require('http');
const app = require('./app');
const initializeDefaultProducts = require('./src/utils/initializeProducts'); 

// Create database connection
const db = new sqlite3.Database('products-systems.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        process.exit(1); // Exit the application on database connection error
    } else {
        console.log('Connected to Database');
        // Create an HTTP server after successfully connecting to the database
        const server = http.createServer(app);
        server.listen(3000, () => {
            initializeDefaultProducts();
            console.log('Server is running on port 3000');
        });
    }
});