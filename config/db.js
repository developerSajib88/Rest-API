const mongoose = require('mongoose');
const config = require("./config");

const database = config.db.url;

mongoose.connect(database).then(()=>{
    console.log("Mongoose is connected.");
}).catch((error)=>{
    console.log(error);
});