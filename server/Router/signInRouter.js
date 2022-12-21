const express = require("express");
const loginRouter = express.Router();
const bcrypt = require("bcryptjs");

const userdb = require("../Modules/SignIn")
loginRouter.post("/signin",async(req,res)=>{
    try{
        const password =req.body.password;
        const email=req.body.email;
        const emailId= await userdb.findOne({email:email});

        const isMatch = await  bcrypt.compare(password,emailId.password);
        if(isMatch){
            return res.json({status:"ok", user: true});
        }
        else 
        {
            return res.json({status:"Error", user:false});
        }
    }
    catch(error)
    {
        res.status(400).send("Invalid Email");
    }
});

module.exports = loginRouter;