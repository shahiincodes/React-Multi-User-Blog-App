import React from 'react'
import './register.css'

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
            <input type="password" className='userPass' placeholder='Set password' />
            <button className="signUpBtn btn">Sign Up</button>
        </form>
        <button className='btnRegister btn'>Register</button>
    </div>
  )
}

export default Register