const postModel = require('../Models/postModel')

const updatePostRoute = require('express').Router()

updatePostRoute.put('/update-post/:id',async(req,res)=>{
    try {
        await postModel.findOneAndUpdate({_id:req.params.id},{$set:{content:req.body.content}},{new:true},(err,post)=>{
            res.status(200).json(post)
        }) 
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports= updatePostRoute;