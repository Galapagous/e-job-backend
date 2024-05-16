// import mysql from 'mysql2'

// export const db = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     database: 'ejob',
// })

// --------Mongo db--------
import mongoose from "mongoose";


export const connectToDatabase = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to database")
    } catch (error) {
        console.log(error)
    }
}