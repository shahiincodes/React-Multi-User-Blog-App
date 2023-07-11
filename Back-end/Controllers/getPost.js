const postModel = require("../Models/postModel")

const getPost = async (req,res)=>{
     await postModel.find({},(posts)=>{
         res.status(200).json(posts)
     })
}

module.exports = getPost