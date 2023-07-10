const usersModel = require("../Models/usersModel")

const registerUser = async(req,res)=>{
    const user = new usersModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    try {
        await user.save()
        res.send("data saved from telling from server")
    } catch (error) {
        res.send(error.message)  
    }

}
module.exports = registerUser