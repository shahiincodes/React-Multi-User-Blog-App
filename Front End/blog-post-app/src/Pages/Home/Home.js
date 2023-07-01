import React from 'react'
import "./home.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Posts from '../../components/Posts/Posts'


function Home() {
  return (
    <>
    <div className='home'>
      <div className="posts">
        <Posts />
      </div>
      <div className="sidebar">
        <Sidebar/>
      </div>
    
    </div>
    </>
  )
}

export default Home