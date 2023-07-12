const createCategory = require('../Controllers/createCategory')
const categoryModel = require('../Models/categoryModel')
const getCategory = require('../Controllers/getCategory')

const router = require('express').Router()
//Get all category
router.get('/all-category',getCategory)
//Create a category
router.post('/create-category',createCategory)

//Delete a category
router.delete('/delete-category/:id',async(req,res)=>{
    try {
        await categoryModel.findOneAndDelete({_id:req.params.id},()=>{
            res.status(200).json('Deleted successfully')
        })
    } catch (error) {
        res.status(200).json(error)
    }
})
//Update a category
router.put('/update-category/:id',async(req,res)=>{
    try {
       const updatedCategory = await categoryModel.findOneAndUpdate({_id:req.params.id},{$set:{name:req.body.name}},{new:true},(err,post)=>{
            res.status(200).json(updatedCategory)
        }) 
    } catch (error) {
        res.status(400).json(error)
    }
})



module.exports = router;