const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello world from the server from auth file`);
});


// Using Promises
// router.post('/register', (req, res) => {

//     const { name, email, phone, work, password, cpassword } = req.body;

//     // console.log(req.body);
//     // console.log(name);
//     // res.json({ message: req.body });
//     // // res.send(`my router page f registration`);

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill the reuired details" });

//     }

//     User.findOne({ email: email }).then((userExist) => {
//         if (userExist) {
//             return res.status(422).json({ error: "Email already exists" });

//         }

//         const user = new User({ name, email, phone, work, password, cpassword });

//         user.save().then(() => {
//             res.status(201).json({ message: "User registered successfully" });
//         }).catch((err) => res.status(500).json({ error: "Failed to registered" }));

//     }).catch((err) => res.status(500).json({ error: "Failed to registered" }));



// });

router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    // console.log(req.body);
    // console.log(name);
    // res.json({ message: req.body });
    // res.send(`my router page f registration`);

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill the reuired details" });

    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });

        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Incorrect password" });
        }
        else {

            const user = new User({ name, email, phone, work, password, cpassword });

            // const userRegister = await user.save();
            await user.save();
            res.status(201).json({ message: "User registered successfully" });

            // if (userRegister) {
            //     res.status(201).json({ message: "User registered successfully" });
            // }
            // else {
            //     res.status(500).json({ error: "Failed to registered" });
            // }

        }



    }
    catch (err) {
        console.log(err);
    }

});


router.post('/signin', async (req, res) => {

    // console.log(req.body);
    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the required details" });

        }

        const userLogin = await User.findOne({ email: email });
        //console.log(userLogin);

        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            if (!isMatch) {
                res.status(400).json({ error: "Invalid credentials" });
            }
            else {
                res.json({ mesaage: "User sign in successfully" });
            }

        }
        else {
            res.status(400).json({ error: "Invalid credentials" });
        }

    }
    catch (err) {
        console.log(err);
    }




    // res.json({ message: "done" })

});


module.exports = router;