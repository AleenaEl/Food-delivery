import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from "validator";

// login
const loginUser = async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await userModel.findOne({ email })
        console.log(user);
        
        if (!user) {
            return res.json({success:false,message:"User Doesn't Exist"})
        }

        if (password!==user.password) {
            return res.json({ success: false, message: "Invalid Password" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        // if (!isMatch) {
        //     return res.json({ success: false, message: "Invalid creditenials" })
        // }
        const role = user.role;

        const token = createToken(user._id)
        const username=user.name
        res.json({ success: true, token, username,role })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error in Login" })
    }
}


// to generate token 
const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const exists = await userModel.findOne({ email })
        if (exists) {
           return res.json({ success: false, message:'User Already Exists'})
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Please Enter a Valid Email' })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: 'Please Enter a Stronger Password' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword= await bcrypt.hash(password,salt)
        const newUser = await userModel({
            name: name,
            email: email,
            password:password
            })
        const user = await newUser.save()
        const username = user.name
        const role = user.role;
        const token = createToken(user._id)
        res.json({success:true,token,role,username})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error in Reg" })
    }
}

export { loginUser, registerUser }