
"use strict";
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = express.Router();
var sess; // global session, NOT recommended
const app = express();
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("../db-connections");

/*router.get('/', (req, res) => {
    sess = req.session;
    if (sess.email) {
        return res.redirect('/admin');
    }
    res.sendFile('index.html');
});*/

router.post('/login', async (req, res) => {

    console.log('111');
    sess = req.session;
    sess.email = req.body.email;
    sess.pass = req.body.pass;
    const sql = `SELECT * FROM users where email='${sess.email}' and pass='${sess.pass}'`;
    console.log(sql);
    db.all(sql, (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json(rows);
    });

});

router.get('/admin', (req, res) => {
    console.log(req);
    sess = req.session;
    if (sess.email) {

        res.json(`<h3>Hello ${sess.email} </h3><a href="javascript:logOut();">Logout</a>`);

    }
    else {

        res.json('<h4>Please login first.</h4><a href=' + '/' + '>Login</a>');

    }
});

router.get('/logout', (req, res) => {
    console.log('logout')
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.json('out');
    });

});

app.use('/', router);

module.exports = app;