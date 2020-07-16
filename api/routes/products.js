const express = require("express");

const app = express();
const handlers = require("./controllers");

app.get("/products", handlers.getProducts);

module.exports = app;
