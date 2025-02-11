import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:true, limit:'1mb'}))
app.use(express.json())




app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})