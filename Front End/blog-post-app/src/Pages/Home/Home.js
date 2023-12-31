import React from 'react'
import "./home.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Posts from '../../components/Posts/Posts'
import Header from '../../components/Header/Header'



function Home({posts}) {
  
  return (
    <>
    <Header/>
    <div className='home'>
      <div className="posts">
        <Posts posts = {posts}/>
      </div>
      <div className="sidebar">
        <Sidebar/>
      </div>
    
    </div>
    </>
  )
}

export default Home