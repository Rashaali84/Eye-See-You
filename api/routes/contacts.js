const express = require("express");

const app = express();
const handlers = require("./controllers");

app.post("/contacts", handlers.postContacts);

module.exports = app;
