const express = require("express")
const app = express()
const env = require('dotenv')
env.config()





app.use(express.json())
app.listen(process.env.PORT,()=>console.log(`Server started at port ${process.env.PORT}`))