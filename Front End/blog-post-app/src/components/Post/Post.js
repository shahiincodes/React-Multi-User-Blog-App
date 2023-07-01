import React from 'react'
import "./post.css"
import img from "./1681750909346IMG_1460.JPG"

function Post() {
  return (
    <>
    <div className='post'>
        <img src={img} alt="" />
        <div className="postInfo">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <p className='postDetail'> Lorenostrum deserunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quo aliquam quas suscipit deleniti vitae sunt praesentium quae distinctio dolorem? Sapiente eaque voluptas doloribus ipsam tenetur consequuntur velit dolor impedit totam in! Labore pariatur eaque ullam iure nesciunt, nostrum minus cum id dolorem ex voluptates unde enim itaque totam dignissimos. sapiente dolorem temporibus maonem eligendi est nulla.</p>
    </div>
    </>
  )
}

export default Post