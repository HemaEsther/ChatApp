import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

const secureRoute = async(req,res,next) => {
    try {
        // console.log("Incoming cookies:", req.cookies); 
        
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "No token,authorization denied"});
        }
        const decoded = jwt.verify(token,process.env.jwt_token);
        if(!decoded){
            return res.status(401).json({error: "Invalid Token"});
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({error: "No User Found"});
        }
        req.user=user;
        next();
    } catch (error) {
        console.log("Error in secure routes",error);
        res.status(500).json({error: "Internal server error"});
    }
}

export default secureRoute;