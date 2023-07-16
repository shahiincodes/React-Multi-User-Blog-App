import React from 'react'
import Post from '../../components/Post/Post'
import './allPosts.css'

function AllPosts({posts}) {
  
  return (
    <div className='all-posts'>
        {posts.map((post)=>{
          return <Post post={post} key={post._id}/>
        })}
    </div>
  )
}

export default AllPosts