import express from 'express'
import AuthRoute from './route/auth.route.js'
import UserRoute from './route/user.route.js'
import JobRoute from './route/job.route.js'
import * as dotenv from 'dotenv'
import {connectToDatabase} from './db.js'
import cors from 'cors'


const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())

// ------------------API Routes-------------------

app.use('/api/v1/auth', AuthRoute)
app.use('/api/v1/user', UserRoute)
app.use('/api/v1/job', JobRoute)
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || "internal server error"
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})


const port  = process.env.PORT || 3001
app.listen(port, ()=>{
    connectToDatabase()
    console.log(`Server running smoothly on port ${port}...`)
})