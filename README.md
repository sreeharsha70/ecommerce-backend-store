# 🛒 E-Commerce Backend for Product Store

This project is a backend system for an online store built with Node.js, Express, and MySQL. It provides RESTful APIs for managing products, handling cart operations, and processing orders. The architecture follows the MVC (Model-View-Controller) pattern for modularity and scalability.

---

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **ORM/Driver**: mysql2
- **Configuration**: dotenv
- **API Style**: REST
- **Architecture**: MVC

---

## 📦 Features

- Product CRUD operations
- Cart and order management (extendable)
- RESTful API endpoints
- Modular folder structure
- Secure and environment-configurable

---

## 📁 Folder Structure
ecommerce-backend-store/
├── server.js
├── package.json
├── .env
├── config/
│ └── db.js
├── routes/
│ └── productRoutes.js
├── controllers/
│ └── productController.js
├── models/
│ └── productModel.js
└── README.md

```bash
git clone git@github.com:sreeharsha70/ecommerce-backend-store.git
cd ecommerce-backend-store

Create a .env file in the root:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=store_db
PORT=3000
Set Up the Database
CREATE DATABASE store_db;

USE store_db;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10,2),
  stock INT
);
run the server: npm start
