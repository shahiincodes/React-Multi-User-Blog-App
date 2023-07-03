import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
        <span className='formtitle'>Register</span>
        <form className='registerForm'>
            <label>User Name</label>
            <input type="text" className='username' placeholder='Enter your name'/>
            <label>Email</label>
            <input type="email" className='userEmail' placeholder='Enter your Email' />
            <label>Set password</label>
            <input type="password" className='userPass' placeholder='Set Password' />
            <button className="btn">Sign Up</button>
        </form>
        <button className='btnRegister btn'>
          <Link className='link btn' to={'/logIn'} >LOG IN</Link>
        </button>
    </div>
  )
}

export default Register