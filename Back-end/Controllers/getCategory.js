const categoryModel = require("../Models/categoryModel")

const getCategory = async(req,res)=>{
    try {
        const allCategories = await categoryModel.find({})
        res.json(allCategories)
    } catch (error) {
        res.json(error)
    }
}
module.exports = getCategory