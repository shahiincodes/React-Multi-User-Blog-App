const userModel = require('../Models/usersModel')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

const logIn = async (req,res)=>{
    const {name,password} = req.body
    try {
        let user = await userModel.findOne({name:name})
        let decrypted = CryptoJS.AES.decrypt(user.password,process.env.crypto_key).toString(CryptoJS.enc.Utf8)
        if(!user){
            return  res.status(201).send("User not found")
        }
        else{
            if(password===decrypted){
                //generate token
                const token = jwt.sign({userId:user._id},process.env.jwt_key)
                console.log(`Token generated for : ${token}`)
                res.cookie('userToken',token,{httpOnly:true})
                res.render('/single')
            }
        }
    } catch (error) {
        res.status(400).json('something went wrong')
    }

}
module.exports = logIn