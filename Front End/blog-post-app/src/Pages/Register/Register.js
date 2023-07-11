import React, { useState } from 'react'
import './register.css'
import { Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
const [error,setError] = useState(false)
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
const postUser = async (e)=>{
  e.preventDefault()
  try {
    await axios.post('http://localhost:3001/register',user).then((res)=>{
      res.data && window.location.replace('/logIn')
    })
  } catch (error) {
    setError(true)
  }
}
  return (
    <div className='register'>
        <span className='formtitle'>Register</span>
        <form className='registerForm' onSubmit={postUser}>
            <label>User Name</label>
            <input type="text" className='username' name='name' value={user.name} onChange={handleChange} placeholder='Enter your name'required/>
            <label>Email</label>
            <input type="email" className='userEmail' name='email' value={user.email} onChange={handleChange} placeholder='Enter your Email' required/>
            <label>Set password</label>
            <input type="password" className='userPass' name='password' value={user.password} onChange={handleChange} placeholder='Set Password' required/>
            <button className="btn" type='submit' >Sign Up</button>
        </form>
        <button className='btnRegister btn'>
          <Link className='link btn' to={'/logIn'} >LOG IN</Link>
        </button>
        {error && <h4 style={{color:'red',marginTop:'15px'}}>Something went wrong</h4>}
    </div>
  )
}

export default Register