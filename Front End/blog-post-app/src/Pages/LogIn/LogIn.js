import React from 'react'
import './logIn.css'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
    <div className='logIn'>
        <span className='formtitle'>LogIn</span>
        <form className='logInForm'>
            <label>Email</label>
            <input type="email" className='userEmail' placeholder='Enter your Email' />
            <label>Password</label>
            <input type="password" className='userPass' placeholder='Enter password' />
            <button className="logInBtn btn">LogIn</button>
        </form>
        <button className='signUpBtn btn'>
          <Link to={'/register'} className='link' >Register</Link>
        </button>
    </div>
  )
}

export default LogIn