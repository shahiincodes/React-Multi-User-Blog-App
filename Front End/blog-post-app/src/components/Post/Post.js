import React from 'react'
import "./post.css"

import { Link } from 'react-router-dom'

function Post({post}) {
  return (
    <>
    <div className='post'>
      <Link className='link' to={`/posts/${post._id}`}>
        {post.photo && (
          <img src={post.photo} alt="" />

        )}
        <div className="postInfo">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <h1 className='postTitle'>{post.title}</h1>
        <p className='postDetail'>{post.content}</p>
      </Link>
    </div>
    </>
  )
}

export default Post