import mongoose, { Model, Schema } from "mongoose";

const userSchema = Schema({
    companyName:{
        type: String,
        required: true,
    },
    companyEmail: {
        type: String,
        required: true,
        unique: true
    },
    accountType: {
        type: String,
        required: true,
    },
    companyNumber: {
        type: String,
        required: true,
    },
    jobPosted: {
        type: Array,
        required: true,
    },
    address: {
        type: String,
    },
    companySize: {
        type: String,
    },
    companyCertificates: {
        type: Array,
    },
    companyDocuments: {
        type: Array,
    },
},{timeStamps: true})

export const userModel = new Model("user", userSchema)