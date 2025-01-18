import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const createTokenandSaveCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.jwt_token, {
    expiresIn: "10d",
  });
  // console.log("Setting cookie with token:", token);
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    samesite: "strict",
  });
  // console.log("Cookie set successfully");
};

export default createTokenandSaveCookies;
