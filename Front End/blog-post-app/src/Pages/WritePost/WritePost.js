import React, { useState } from 'react'
import img from "./1682068265147DSCF0339.JPG"
import "./writePost.css";
import axios from 'axios';
 

const WritePost = () => {

    const [post,setPost] = useState({
        photo:'',
        title:'',
        content:'',
        userId:''
    })
    const handleChange = (event)=>{
        event.preventDefault()
        setPost((prv)=>{
            return {...prv,[event.target.name]:event.target.value}
        })
    }
    const createPost = async (e)=>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:3001/create-post',post).then((res)=>{
                console.log(res.data)
                setPost({
                    photo:'',
                    title:'',
                    content:'',
                    userId:''
                })
            }).catch((error)=>{
                console.log(error)
            })   
        } catch (error) {
            console.log("hello error")
        }
    }
  return (
    <div className='writePost'> 
        <img src={img} alt="" />
        <form className='writePostForm' onSubmit={createPost}>  
            <div className="formGroup">
                <label htmlFor="fileInput">
                    <i className="addIcon fa-sharp fa-solid fa-plus"></i>
                </label>
                <input id='fileInput' type="file" name='photo' style={{display:'none'}}/>
                <input type="text"className='postInput' name='title' placeholder='Title' value={post.title} onChange={handleChange} autoFocus = {true}/>
            </div>
            <div className='formGroup'>
                <textarea className='postInput' name='content' value={post.content} onChange={handleChange} placeholder='Write your post...'></textarea>
            </div>
            <button className='submitPost' type='submit'>Publish</button>
        </form>
    </div>
  )
}

export default WritePost