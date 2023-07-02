import React from 'react'
import "./profile.css"
import Sidebar from '../../components/Sidebar/Sidebar'


const Profile = () => {
  return (
    <div className='profile'>
        <div className="update">
            update
        </div>
        <div className="delete">
            <Sidebar/>
        </div>
    </div>
  )
}

export default Profile