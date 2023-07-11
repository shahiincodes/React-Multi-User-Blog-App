const postModel = require('../Models/postModel')

const createPostRoute = require('express').Router()

createPostRoute.post('/create-post',async(req,res)=>{
    try {
        const post = new postModel({
            title:req.body.title,
            content:req.body.content,
            userId:req.body.userId,
            category:req.body.category
        })
        await post.save()
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = createPostRoute;