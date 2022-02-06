const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello world from the server from auth file`);
});

router.post('/register', (req, res) => {
    console.log(req.body);
    res.json({ message: req.body });
    // res.send(`my router page f registration`);
});

module.exports = router;