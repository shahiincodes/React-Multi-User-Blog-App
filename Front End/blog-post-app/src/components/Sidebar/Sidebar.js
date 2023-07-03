import React from "react";
import img from "./1681750909222IMG_1446.JPG";
import "./sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">BEST ARTICLE</span>
          <img src={img} alt="" />
          <p>
            Lorem s cumque ipsam, quaerat rerum, impedit ex deserunt eum
            temporibus!lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, veniam.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarCategories">
            <li className="category">Sports</li>
            <li className="category">Dancing</li>
            <li className="category">Singing</li>
            <li className="category">Debating</li>
            <li className="category">Dancing</li>
            <li className="category">Singing</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarIcons">
            <i class="sidebarIcon fa-brands fa-instagram"></i>
            <i class="sidebarIcon fa-brands fa-facebook"></i>
            <i class="sidebarIcon fa-brands fa-linkedin"></i>
            <i class="sidebarIcon fa-brands fa-twitter"></i>
            <i class="sidebarIcon fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
