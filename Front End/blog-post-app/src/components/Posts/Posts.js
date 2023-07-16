import React from 'react'
import Post from '../Post/Post'

function Posts({posts}) {
  return (
    <div className='posts'>
      {posts.map((post)=>{
       return <Post post = {post} key={post._id}/>
      })
      }
      
    </div>
  )
}

export default Posts