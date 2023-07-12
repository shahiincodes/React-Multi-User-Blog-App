const usersModel = require('../Models/usersModel')

const router = require('express').Router()
//Get all the users
router.get('/all-users',async(req,res)=>{
    try {
        const users=await usersModel.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
})
//Create a new user
router.put('/update-user/:id', async (req, res)=> {
    let user = await usersModel.findOne({_id:req.params.id})

    try {
    if(!user){
        return res.json('User not found')
    }else{
        const updatedUser = await usersModel.findOneAndUpdate({_id:req.params.id},{$set:{name:req.body.name}},{new:true})
        res.status(200).json(updatedUser)
    }
    
} catch (error) {
    res.json(error)
}

})

//delete user
router.delete('/delete-user/:id',async(req,res)=>{
    try {
        await usersModel.findOneAndDelete({_id:req.params.id})
        res.json('User deleted successfully')
    } catch (error) {
        res.json(error)
    }
})

module.exports = router