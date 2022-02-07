const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello world from the server from auth file`);
});

router.post('/register', (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    // console.log(req.body);
    // console.log(name);
    // res.json({ message: req.body });
    // // res.send(`my router page f registration`);

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill the reuired details" });

    }

    User.findOne({ email: email }).then((userExist) => {
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });

        }

        const user = new User({ name, email, phone, work, password, cpassword });

        user.save().then(() => {
            res.status(201).json({ message: "User registered successfully" });
        }).catch((err) => res.status(500).json({ error: "Failed to registered" }));

    }).catch((err) => res.status(500).json({ error: "Failed to registered" }));



});

module.exports = router;