import {userModel} from "../models/user.model.js";
import bcrypt from "bcryptjs"

export async function userRegisterController(req, res){
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        return res.status(401).json({
            message: "User's Credentials are necessary"
        })
    }

    const isUserAlreadyExists = await userModel.findOne({
        $or: [{username}, {email}]
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message: "User is already exists with this account"
        })
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username, 
        email,
        password: hash
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET,{
        expiresIn: '6d'
    })

    res.cookie("token", token);

    return res.status(200).json({
        message: "User Registered Successfully",
        user: {
            username: user.username,
            id: user._id,
            email: user.email
        },
        token
    })

    
}