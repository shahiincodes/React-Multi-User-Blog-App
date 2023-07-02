import React from 'react'
import img from "./1682068265147DSCF0339.JPG"
import "./writePost.css"

const WritePost = () => {
  return (
    <div className='writePost'> 
        <img src={img} alt="" />
        <form className='writePostForm'>  
            <div className="formGroup">
                <label htmlFor="fileInput">
                    <i className="addIcon fa-sharp fa-solid fa-plus"></i>
                </label>
                <input id='fileInput' type="file" style={{display:'none'}}/>
                <input type="text"className='postInput' placeholder='Title' autoFocus = {true}/>
            </div>
            <div className='formGroup'>
                <textarea name="writepost" className='postInput' placeholder='Write your post...'></textarea>
            </div>
        </form>
        <button className='submitPost'>Publish</button>
    </div>
  )
}

export default WritePost