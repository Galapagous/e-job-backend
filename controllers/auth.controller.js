// import bcryptjs from "bcryptjs"
import bcrypt from "bcryptjs";
import UserModel from "../model/user.model.js";
import jwt from 'jsonwebtoken'
import { errorHandler } from "../utils/error.js";



export const signUp = async (req, res, next) => {
  const userData = req.body.formData
  const { password } = userData;
  // ----hash password------
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  // -----add password to incoming data-----
  const data = { ...userData, password: hash };
  const newUser = await UserModel(data);
  try {
    const savedUser = await newUser.save();
    res.status(200).json("User created successFully");
  } catch (error) {
    console.log(error)
    next(error);
  }
};



export const signIn =async (req, res, next) => {
  const userData = req.body.userData
  const {email, password} = userData
  try {
    const verifyUser = await UserModel.findOne({email})
    if(!verifyUser) return next(errorHandler(403, "Invalid username or password"))
        const verifyPassword = bcrypt.compareSync(password, verifyUser.password)
    if(!verifyPassword) return next(errorHandler(403, "Invalid username or password"))
    // generate token and send as response.
    const {password: userPassword, ...otherDetails} = verifyUser._doc
    const token = jwt.sign({id: verifyUser._id}, process.env.JWT_SECRET)
    res.status(200).cookie("access_token", token, {
        httpOnly: true
    }).json(otherDetails)
  } catch (error) {
    next(error)
  }
};


export const signOut = (req, res) => {
  res.send("hello from register");
};
