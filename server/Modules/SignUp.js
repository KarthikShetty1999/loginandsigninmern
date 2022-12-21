const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const bcrypt = require("bcryptjs");

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology:true});

const signUpSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true,
        index: { unique: true, sparse: true }
    },
    password : {
        type: String,
        required : true
    }
},{collection : 'registration'});

signUpSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});
module.exports = mongoose.model("signup", signUpSchema); 