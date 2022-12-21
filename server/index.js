const express = require("express");
const app = express();
const cors=require("cors");
const signin = require("./Router/signInRouter");
const signup= require("./Router/signUpRouter");
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user",signin);
app.use("/userSignUp",signup);

app.listen(process.env.PORT,()=>
{
    console.log("Running...",process.env.PORT)
})