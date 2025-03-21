# RESTful API for Products and Reviews  

A RESTful API built using **Node.js, Express, SQLite, and Sequelize** to manage products and their reviews.  

## Technologies Used  
- **Node.js** - Server-side runtime  
- **Express.js** - Web framework for building APIs  
- **SQLite** - Lightweight database  
- **Sequelize** - ORM for database interaction  
- **Joi** - Input validation  
- **Postman** - API testing  

---

## Project Structure  
```
-- postman-collection  # API Endpoints Collection (for testing)
src\
 |-- controllers\      # Handles incoming requests (Controller layer)
 |-- joi-validation\   # Input validation using Joi
 |-- middlewares\      # Custom Express middlewares
 |-- models\           # Database models (Data layer)
 |-- routes\           # API routes
 |-- sample-data\      # Sample JSON data for initial setup
 |-- services\         # Business logic (Service layer)
 |-- utils\            # Utility functions and error handling
-- app.js              # Express app configuration
-- index.js            # Application entry point
-- package.json        # Project dependencies and scripts
```

---

## Setup and Installation  

### 1⃣ Clone the Repository  
```sh
git clone <repository-url>
cd <project-folder>
```

### 2⃣ Install Dependencies  
```sh
npm install
```

### 3⃣ Configure Database  
- This project uses **SQLite** as the database.  
- The database file (`products-systems.db`) is automatically created in the root directory.  
- If needed, you can modify the database configuration in `models/sequelize.js`.

### 4⃣ Start the Server 
```sh
npm run dev
```

 The server will run at `http://localhost:3000`

---

##  Models  
Defines the structure of entries in the database.

---

##  Services  
The **Service Layer** contains business logic, such as:  
 Database queries  
 Data manipulation  
 Complex calculations  
 Third-party API calls  

Services should only be called by **controllers** or other services.

---

## Controllers  
Controllers handle incoming HTTP requests:  
 Validate request parameters  
 Call services  
 Return responses  

Controllers should **not** contain business logic directly.

---

## Routes  
Defines the API endpoints and links them to controllers. No business logic should be present in routes. Middleware (e.g., authentication, validation) is added here.

---

## Features  
**Add Reviews** - Users can review products using a `productId` as a foreign key.  
**Fetch Reviews** - View all reviews or get reviews for a specific product.  
**Fetch Top Rated Products** - Retrieve the top **3 most highly rated** products.  
**Fetch Products** - View all available product details.  

---

## API Endpoints  

### **1⃣ Fetch All Reviews**  
🔹 **Endpoint:** `/reviews`  
🔹 **Method:** `GET`  

### **2⃣ Fetch Reviews for a Specific Product**  
🔹 **Endpoint:** `/reviews/:productId`  
🔹 **Method:** `GET`  

### **3⃣ Add a Review**  
🔹 **Endpoint:** `/reviews`  
🔹 **Method:** `POST`  
🔹 **Request Body:**  
```json
{
    "productId": "550e8400-e29b-41d4-a716-446655440000",
    "rating": 5,
    "comment": "Great product!"
}
```

### **4⃣ Fetch Top 3 Rated Products**  
🔹 **Endpoint:** `/reviews/top-rated`  
🔹 **Method:** `GET`  

### **5⃣ Fetch All Products**  
🔹 **Endpoint:** `/products`  
🔹 **Method:** `GET`  

---

## Running Tests  
You can use **Postman** to test the API endpoints. Import the `postman-collection` file into Postman for quick testing.