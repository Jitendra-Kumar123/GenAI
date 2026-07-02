import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, "user name is required"],
        unique: true,
        index: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        index: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
        trim: true
    }
}, {
    timestamps: true
})

const userModel = mongoose.model("user", userSchema);

export {userModel};