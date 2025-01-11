import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';

export const signup= async (req,res)=>{
    const{fullname,email,password,confirmpassword} = req.body;
    try {
        if(password!==confirmpassword){
            return res.status(400).json({error:"Password do not match"});
        }
        const user= await User.findOne({email})
        if(user){
            return res.status(400).json({error:"User already registered"});
        }
        //Hashing the password
        const hashpassword = await bcrypt.hash(password,10);
        const newUser = await new User({
            fullname,
            email,
            password:hashpassword,
        })
        await newUser.save();
        res.status(201).json({message:"user created successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}