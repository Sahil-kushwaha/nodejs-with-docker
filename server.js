import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const PORT = process.env.PORT || 5000
const replica = process.env.APP_NAME

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:true, limit:'1mb'}))
app.use(express.json())

app.use('/' , (req,res)=>{
  
    res.sendFile('index.html',{root:'public'})
    console.log("response sent from "+ replica ) 
})


app.listen(PORT , ()=>{
    console.log(`${replica}Server is running on port ${PORT}`)
})