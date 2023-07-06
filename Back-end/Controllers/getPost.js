const postModel = require("../Models/postModel")

const getPost = async (req,res)=>{
    const posts = await postModel.find()
    res.status(200).send(posts)
}

module.exports = getPost