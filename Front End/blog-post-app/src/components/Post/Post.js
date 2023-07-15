import React from 'react'
import "./post.css"
import img from "./1681750909346IMG_1460.JPG"

function Post({post}) {
  return (
    <>
    <div className='post'>
        <img src={img} alt="" />
        <div className="postInfo">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <h1>{post.title}</h1>
        <p className='postDetail'>{post.content}</p>
    </div>
    </>
  )
}

export default Post