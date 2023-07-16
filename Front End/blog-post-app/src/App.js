
import Top from "./components/Top/Top";
import LogIn from "./Pages/LogIn/LogIn";
import Home from './Pages/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import Single from "./Pages/Single/Single";
import WritePost from "./Pages/WritePost/WritePost";
import AllPosts from "./Pages/AllPosts/AllPosts";
import axios from 'axios'
import { useEffect, useState } from "react";



function App() {

  const user = true;
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async ()=>{
      try {
        await axios.get('http://localhost:3001/all-posts').then((res)=>{
          setPosts(res.data)
        })
      } catch (error) {
        console.log('error fetching all post')
      }
    }
    fetchPosts()
  },[posts])

  return (
    <>
    <Router>
      <Top/>
      <Routes>
        <Route path="/" element={user?<Home posts = {posts} />:<Register/>}/>
        <Route path="/logIn" element={<LogIn/>}/>
        <Route path="/all-posts" element={<AllPosts posts={posts}/>}/>
        <Route path="/register" element={user?<Home/>:<Register/>}/>
        <Route path="/profile" element={user?<Profile/>:<Register/>}/>
        <Route path="/write-post" element={user?<WritePost/>:<Register/>}/>
        <Route path="/posts/:postId" element={user?<Single/>:<Register/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
