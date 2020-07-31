const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("./db/mongoose.js");

const app = express();

const secret = "mysecretsshhh";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", require("./routes/home.js"));
app.use("/", require("./routes/login.js"));
app.use("/", require("./routes/services.js"));
app.use("/", require("./routes/products.js"));
app.use("/", require("./routes/brands.js"));
app.use("/", require("./routes/testimonials.js"));

module.exports = app;
