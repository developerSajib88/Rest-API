const express = require("express");
const authRouter = require("./routes/auth.routes");
const productsRouter = require("./routes/products.routes");
const { notFound } = require("./middlewares/notFoundHandler");
const { errorHandler } = require("./middlewares/errorHandler");
const { authCheck } = require("./middlewares/jwt");

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handlers
app.use("/auth", authRouter);
app.use("/products", authCheck, productsRouter);

// Handle 404 - Not Found
app.use(notFound);

// Global Error Handling Middleware
app.use(errorHandler);

module.exports = app;
