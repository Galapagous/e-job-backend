import express from 'express'
const router = express.Router()

router.get('/singleUser/:id', (req,res)=>{
    res.send("Fetching a user")
})

router.get('/allUser', (req,res)=>{
    res.send("Fetching all user")
})

router.put("/:id", (req, res) =>{
    res.send("Updating user data")
})

router.delete("/:id", (req, res) =>{
    res.send("deleting user data")
})


export default router