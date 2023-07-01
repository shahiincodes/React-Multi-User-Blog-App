import React from 'react'
import "./home.css"
import Sidebar from '../../Sidebar/Sidebar'


function Home() {
  return (
    <>
    <div className='home'>
      <div className="posts">
        posts here
      </div>
      <div className="sidebar">
        <Sidebar/>
      </div>
    
    </div>
    </>
  )
}

export default Home