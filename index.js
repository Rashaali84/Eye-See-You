// this is the main entry point for your full app
// it serves your frontend & provides access to your API

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const api = require("./api/server");
const { urlencoded } = require("body-parser");

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.method + ": " + req.path);
  next();
});

app.use("/", express.static(__dirname + "/client/build/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

app.post("/", urlencodedParser, function (req, res) {
  // create user in req.body
  console.log(req.body);
  if (!req.body) return res.sendStatus(400);
});

app.use("/api", api);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening at http://127.0.0.1:${port}`));
