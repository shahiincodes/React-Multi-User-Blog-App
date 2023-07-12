const categoryModel = require("../Models/categoryModel")

const createCategory = async(req,res)=>{
    try {
        const category = new categoryModel({
            name:req.body.name,
            userId:req.body.userId,   
        })
        await category.save()
        res.status(201).json(category)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = createCategory