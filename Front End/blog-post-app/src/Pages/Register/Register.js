import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

const [user,setUser] = useState({
  name:'',
  email:'',
  password:''
})

const handleChange = (e)=>{
  e.preventDefault()
  setUser((prev)=>{
    return {...prev,[e.target.name]:e.target.value}
  })
}
const postUser = (e)=>{
  e.preventDefault()
  console.log(user)
  axios.post('http://localhost:3001/register',user).then((res)=>{
    console.log('user saved from react'+res.data).catch((err)=>console.log(err.message))
  })
}
  return (
    <div className='register'>
        <span className='formtitle'>Register</span>
        <form className='registerForm'>
            <label>User Name</label>
            <input type="text" className='username' name='name' value={user.name} onChange={handleChange} placeholder='Enter your name'/>
            <label>Email</label>
            <input type="email" className='userEmail' name='email' value={user.email} onChange={handleChange} placeholder='Enter your Email' />
            <label>Set password</label>
            <input type="password" className='userPass' name='password' value={user.password} onChange={handleChange} placeholder='Set Password' />
            <button className="btn" type='submit' onClick={postUser} >Sign Up</button>
        </form>
        <button className='btnRegister btn'>
          <Link className='link btn' to={'/logIn'} >LOG IN</Link>
        </button>
    </div>
  )
}

export default Register