const express = require("express");

const app = express();
const handlers = require("./controllers");

app.get("/brands", handlers.getBrands);

module.exports = app;
