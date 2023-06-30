import React from 'react'
import img from "./delhi.jpg"
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span>React and Node</span>
            <span>Blog</span>
        </div>
        <img src={img} alt="" />
    </div>
  )
}

export default Header