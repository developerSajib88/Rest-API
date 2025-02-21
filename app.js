const express = require("express");
const authRouter = require("./routes/auth.routes");
const productsRouter = require("./routes/products.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/auth", authRouter);
app.use("/products", productsRouter);

module.exports= app;