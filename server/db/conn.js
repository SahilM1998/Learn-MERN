const mongoose = require('mongoose');

const DB = process.env.DATABASE;

//connecting mongoDB
mongoose.connect(DB).then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log(`error in connection`));