import express from 'express'
const router = express.Router()

router.get('/job/:id', (req,res)=>{
    res.send("Fetching a job")
})

router.get("/job/all", (req, res)=>{
    res.send("fetching all job")
})

router.post('/job/:id', (req,res)=>{
    res.send("Creating a job")
})

router.put("/user/:id", (req, res) =>{
    res.send("Updating a job")
})

router.delete("/user/:id", (req, res) =>{
    res.send("deleting job data")
})


export default router