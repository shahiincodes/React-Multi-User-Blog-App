import React from "react";
import "./Top.css";
import img from "./16824922819521671634744497WIN_20220817_17_10_30_Pro.jpg";

function Top() {
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
          <li className="topItems">Home</li>
          <li className="topItems">About</li>
          <li className="topItems">Blogs</li>
          <li className="topItems">write post</li>
          <li className="topItems">Contact</li>
          <li className="topItems">
              <i class="fa-solid fa-user"></i>
          </li>
        </ul>
      </div>
      <div className="item3">
        <img src={img} alt="" />
        <input type="text" />
        <i class="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Top;
