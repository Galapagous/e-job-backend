import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    accountType: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    jobChoice: {
        type: Array,
    },
    appliedJobs: {
        type: Array,
    },
    address: {
        type: String,
    },
    occupation: {
        type: String,
    },
    sex: {
        type: String,
    },
    age: {
        type: String,
    },
    Identification: {
        type: Array,
    },
},{timestamps: true})

const UserModel = mongoose.model("user", userSchema)

export default UserModel