const express = require("express")
const app = express()
const env = require('dotenv')
const mongoose = require ('mongoose')
const cors = require('cors')
env.config()
const router = require('./Routes/Register')

//connecting Mongodb
mongoose.connect(process.env.MONGO_CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('Db connected succsessfully'))
.catch((err)=>console.log("error connecting db" + " " + err.message))
app.use(cors())
app.use(router)
app.use('/register',router)

app.use(express.json())
app.listen(process.env.PORT,()=>console.log(`Server started at port ${process.env.PORT}`))