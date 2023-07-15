const postModel = require("../Models/postModel")

const getPost = async (req,res)=>{
    try {
        const posts = await postModel.find({})
        res.status(200).json(posts)
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = getPost