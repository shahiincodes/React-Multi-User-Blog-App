const express = require("express")
const app = express()
const env = require('dotenv')
const mongoose = require ('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

env.config()
const router = require('./Routes/auth')
const postRoutes = require('./Routes/postRoutes')
const userRoutes = require('./Routes/userRoutes')
const categoryRoutes = require('./Routes/categoryRoutes')

//connecting Mongodb
mongoose.connect(process.env.MONGO_CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('Db connected succsessfully'))
.catch((err)=>console.log("error connecting db" + " " + err.message))

app.use(cors())
app.use(express.json())
app.use(router)
app.use(postRoutes)
app.use(userRoutes)
app.use(categoryRoutes)


app.use(cookieParser())
app.listen(process.env.PORT,()=>console.log(`Server started at port ${process.env.PORT}`))