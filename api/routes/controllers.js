"use strict";
const db = require("../db-connections");

const handlers = {
  getServices: async (req, res) => {
    const sql = `SELECT * FROM services`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  },
  getProducts: async (req, res) => {
    const sql = `select * from products`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  },
};

module.exports = handlers;
