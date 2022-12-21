const express = require("express");
const userRouter = express.Router();

const userdb = require("../Modules/SignUp");

userRouter.post("/signup",async(req,res)=>{
    try{
        const user=new userdb({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        const val = await user.save();
        res.json({status:"ok"});
    }
    catch(error)
    {
        res.json({status:"Error", error:"Duplicate- value"});
    }
    
})

module.exports = userRouter;