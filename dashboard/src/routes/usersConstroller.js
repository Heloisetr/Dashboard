const express = require('express');
const Users = require('../models/db');
const router = express.Router();

router.post('/login', logIn);
router.post('/register', register);

module.exports = router;

function logIn(req, res) {
    console.log(`req.body: ${JSON.stringify(req.body)}`);

    if (!req.body || !req.body.email || !req.body.pwd)
        return (res.status(400).json("Bad parameters"));

    Users.findOne({email: req.body.email})
    .then(user => {
        if (user.pwd !== req.body.pwd)
            return res.status(400).json("Bad password");
    }).catch(err => {
        return res.status(400).json(err);
    });

    return res.status(200);
};

function register(req, res) {
    console.log(`req.body: ${JSON.stringify(req.body)}`);

    if (!req.body || !req.body.email || !req.body.pwd || !req.body.name || !req.body.firstname)
        return (res.status(400).json("Bad parameters"));

    Users.findOne({email: req.body.email})
    .then(user => {
        return res.status(400).json("Email already exists");
    });

    const newUser = new Users({
        name: req.body.name,
        firstname: req.body.firstname,
        email: req.body.email,
        pwd: req.body.pwd
    });

    Users.create(newUser).catch(err => {
        return res.status(400).json(err);
    });

    return res.status(200);
};