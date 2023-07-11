const usersModel = require("../Models/usersModel")
const cryptoJs = require('crypto-js')


const registerUser = async(req,res)=>{
    try {
        let user = await usersModel.find({name:req.body.name})
        if(user){
           throw error  
        }else{
            const user = new usersModel({
                name:req.body.name,
                email:req.body.email,
                password:cryptoJs.AES.encrypt(req.body.password,process.env.crypto_key).toString()
            })
            await user.save()
            res.status(201).json('successfully saved user')

        }
    } catch (error) {
        res.status(400).json(error.message)  
    }

}
module.exports = registerUser