import React, { useState } from 'react'
import './logIn.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const LogIn = () => {
  const [input,setInput] = useState({
    email:'',
    password:''
  })
  const handleChange = (e)=>{
    e.preventDefault()
   
      setInput((prev)=>{
          return {...prev,[e.target.name]:e.target.value}
      })
    
  }
const handleLogIn = async (e)=>{
  e.preventDefault()
  try {
    await axios.post('http://localhost:3001/logIn',input).then((res)=>{
      console.log('hello')
    }).catch((err)=>console.log(err.message))
  } catch (error) {
    console.log(error.message)
  }
}

  return (
    <div className='logIn'>
        <span className='formtitle'>LogIn</span>
        <form className='logInForm' onSubmit={handleLogIn}>
            <label>Email</label>
            <input type="email" className='userEmail'  name='email' value={input.email} onChange={handleChange} placeholder='Enter your Email' />
            <label>Password</label>
            <input type="password" className='userPass' name='password' value={input.password} onChange={handleChange}  placeholder='Enter password' />
            <button className="logInBtn btn" type='submit'>LogIn</button>
        </form>
        <button className='signUpBtn btn'>
          <Link to={'/register'} className='link' >Register</Link>
        </button>
    </div>
  )
}

export default LogIn