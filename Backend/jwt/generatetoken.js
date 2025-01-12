import  jwt from "jsonwebtoken";

const createTokenandSaveCookies =(userId,res)=>{
    const token=jwt.sign({userId},process.env.jwt_token,{
        expiresIn:"10d"
    });
    res.cookie("jwt",token,{
        httpOnly:true,
        secure:true,
        samesite:"strict",
    });
}

export default createTokenandSaveCookies