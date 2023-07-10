
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



function App() {

  const user = false;

  return (
    <>
    <Router>
      <Top/>
      <Routes>
        <Route path="/" element={user?<Home />:<Register/>}/>
        <Route path="/logIn" element={<LogIn/>}/>
        <Route path="/register" element={user?<Home/>:<Register/>}/>
        <Route path="/profile" element={user?<Profile/>:<Register/>}/>
        <Route path="/single" element={<Single/>}/>
        <Route path="/write-post" element={user?<WritePost/>:<Register/>}/>
        <Route path="/posts/:postId" element={user?<Single/>:<Register/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
