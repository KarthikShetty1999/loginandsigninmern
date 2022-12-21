const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const bcrypt = require("bcryptjs");
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology:true});
const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
}, {collection : 'registration'});

module.exports = mongoose.model("User", userSchema);