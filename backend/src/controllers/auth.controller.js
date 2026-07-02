import {userModel} from "../models/user.model.js";

export async function userRegisterController(req, res){
    const {user, email, password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or: [{user}, {email}]
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message: "User is already exists with this account"
        })
    }

    
}