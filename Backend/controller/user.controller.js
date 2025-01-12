import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import createTokenandSaveCookie from "../jwt/generatetoken.js";


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
        if(newUser){
            createTokenandSaveCookie(newUser._id,res);
            res.status(201).json({message:"user created successfully",newUser});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}


export const login = async(req,res)=>{
    const {email,password} = req.body
    try {
       const user = await User.findOne({email});
        // Check if the user exists
        if (!user) {
            return res.status(400).json({ error: "Invalid user credentials" });
        }
       const isMatch = await bcrypt.compare(password,user.password)
       if (!isMatch) {
        return res.status(400).json({ error: "Invalid user credentials" });
    }
       createTokenandSaveCookie(user._id,res)
       res.status(200).json({message:"user logged in successfully",user:{
        _id:user._id,
        fullname:user.fullname,
        email:user.email
       },});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}

export const logout = async () => {
    try {
        res.clearCookie("jwt");
        res.status(201).json({message:"user logged out successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}