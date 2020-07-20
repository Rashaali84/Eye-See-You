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

  getTestmonials: async (req, res) => {
    const sql = `SELECT * FROM testimonials`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.json(rows)
    });
  },
  postTestmonials: async (req, res) => {
    console.log(req.body.name);
    const sql = ` INSERT INTO testimonials
                       (name , message)
                       VALUES
                      ('${req.body.name}', '${req.body.message}')
                       `;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.json(rows)
    });
  },

  postContacts: (req, res) => {
    // read row data from body
    const newEmail = req.body;
    const sql = `INSERT INTO contacts (Name, Email, Subject, Message)
        VALUES("${newEmail.Name}", "${newEmail.Email}", "${newEmail.Subject}", "${newEmail.Message}")`;
    console.log(newEmail);
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        console.log(err);
        return;
      }
      res.json("New message is sent.");
    });
  },
  getContacts: (req, res) => {
    const sql = `Select * from contacts`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.json(rows)
    });
  }
};



module.exports = handlers;
