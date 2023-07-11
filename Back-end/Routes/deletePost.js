const postModel = require('../Models/postModel')

const deletePostRoute = require('express').Router()

deletePostRoute.delete('/delete/:id',async(req,res)=>{
    try {
        await postModel.findOneAndDelete({_id:req.params.id},()=>{
            res.status(200).json('Deleted successfully')
        })
    } catch (error) {
        res.status(200).json(error)
    }
})

module.exports = deletePostRoute;