const postModel = require('../Models/postModel')
const getPost = require('../Controllers/getPost')

const router = require('express').Router()
//Get all post
router.get('/all-posts',getPost)
//Create a post
router.post('/create-post',async(req,res)=>{
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
//Get a single post
router.get('/posts/:postId',async (req,res)=>{
    try {
       const post= await postModel.findOne({_id:req.params.postId})
       res.json(post)
    } catch (error) {
        res.json(error.message)
    }
})
//Delete a post
router.delete('/delete-post/:id',async(req,res)=>{
    try {
        await postModel.findOneAndDelete({_id:req.params.id},()=>{
            res.status(200).json('Deleted successfully')
        })
    } catch (error) {
        res.status(200).json(error)
    }
})
//Update a post
router.put('/update-post/:id',async(req,res)=>{
    try {
        await postModel.findOneAndUpdate({_id:req.params.id},{$set:{content:req.body.content}},{new:true},(err,post)=>{
            res.status(200).json(post)
        }) 
    } catch (error) {
        res.status(400).json(error)
    }
})



module.exports = router;