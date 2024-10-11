import express from 'express'



const app = express()
app.use(express.json())

const users = []

app.post('/usuario',(req,res)=>{

    users.push(req.body)


    res.status(201).json(req.body)

})

app.get('/usuario',(req,res)=>{
    res.status(200).json(users)
})


app.put('/usuarios/:id',async(req,res)=>{

})

app.delete('/usuarios/:id',async(req,res)=>{
    
})

app.listen(3000)