const express = require("express");

const app = express();
const handlers = require("./controllers");

app.post("/contacts/", handlers.postContacts);
app.get("/contacts/", handlers.getContacts);
module.exports = app;
