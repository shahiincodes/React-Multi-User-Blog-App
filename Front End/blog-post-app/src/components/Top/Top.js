import React from "react";
import "./Top.css";
import img from "./16824922819521671634744497WIN_20220817_17_10_30_Pro.jpg";
import { Link } from "react-router-dom";

function Top() {
  const user = true;
  return (
    <div className="top">
      <div className="item1">
        <i className="socialIcons fa-brands fa-instagram"></i>
        <i className="socialIcons fa-brands fa-facebook"></i>
        <i className="socialIcons fa-brands fa-linkedin"></i>
        <i className="socialIcons fa-brands fa-twitter"></i>
        <i className="socialIcons fa-brands fa-github"></i>
      </div>
      <div className="item2">
        <ul>
          <li className="topItems">
            <Link className="link" to={"/"}>
              HOME
            </Link> 
          </li>
          <li className="topItems">
            <Link className="link" to={"/all-posts"}>
              All POSTS
            </Link>
          </li>
          <li className="topItems">
            <Link className="link" to={"/single"}>
              SINGLE
            </Link>
          </li>
          <li className="topItems">
            <Link className="link" to={"/write-post"}>
              WRITE BLOG
            </Link>
          </li>
          <li className="topItems">
            <Link className="link" to={user?'/logout':'/register'}>
              {user ? 'LOG OUT': 'REGISTER'}
            </Link>
          </li>

          {user&&<li className="topItems">
            <Link className="link" to={"/profile"}>
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>}
        </ul>
      </div>
      <div className="item3">
        {user&&<img src={img} alt="" />}
        <input className="searchInput" type="text" />
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Top;
