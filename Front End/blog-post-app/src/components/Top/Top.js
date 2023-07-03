import React from "react";
import "./Top.css";
import img from "./16824922819521671634744497WIN_20220817_17_10_30_Pro.jpg";
import { Link } from "react-router-dom";

function Top() {
  const user = true;
  return (
    <div className="top">
      <div className="item1">
        <i class="socialIcons fa-brands fa-instagram"></i>
        <i class="socialIcons fa-brands fa-facebook"></i>
        <i class="socialIcons fa-brands fa-linkedin"></i>
        <i class="socialIcons fa-brands fa-twitter"></i>
        <i class="socialIcons fa-brands fa-github"></i>
      </div>
      <div className="item2">
        <ul>
          <li className="topItems">
            <Link className="link" to={"/"}>
              HOME
            </Link>
          </li>
          <li className="topItems">
            <Link className="link" to={"/about"}>
              ABOUT
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
           {user&& <li className="topItems">
            LOG OUT
          </li>}

          {user&&<li className="topItems">
            <Link className="link" to={"/profile"}>
              <i class="fa-solid fa-user"></i>
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
