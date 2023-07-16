import React, { useEffect, useState } from 'react'
import "./single.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import SinglePost from '../../components/SinglePost/SinglePost'
import { useLocation } from 'react-router-dom'
import axios from 'axios'


function Single() {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [post, setPost] = useState({})

  useEffect(()=>{
    const getPost = async ()=>{
      try {
        const result = await axios.get(`http://localhost:3001/posts/${id}`)
        console.log(result.data)
        setPost(result.data)
      } catch (error) {
        console.log('Error getting single post'+error.message)
      }
    }
    getPost()
  },[id])
  
  return (
    <div className='single'>
        <SinglePost post={post}/>
        <Sidebar/>
    </div>
  )
}

export default Single