import React from "react";
import "./profile.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import img from "./1682068265224DSCF0410.JPG";

const Profile = () => {
  return (
    <div className="profile">
      <div className="updateWraper">
        <div className="update">
          <span>Update Profile</span>
          <span style={{ color: "red" }}>Delete Account</span>
        </div>
        <div className="imgContainer">
          <img src={img} alt="" />
          <label htmlFor="inputPP">
          <i className=" inputPP fa-sharp fa-solid fa-user-plus"></i>
          </label>
          <input type="file"  id="inputPP" style={{display:"none"}} />
        </div>
        <form className="updateForm">
          <div className="formWrapper">
            <li>
              <label htmlFor="name">User Name:</label>
              <input type="text" name="name" id="name"/>
            </li>
            <li>
              <label htmlFor="email">Email :</label>
              <input type="email" name="email" id="email"/>
            </li>
            <li>
              <label htmlFor="password">Password :</label>
              <input type="password" name="password" id="password"/>
            </li>
            <button type="submit" className="updateBtn">Update</button>
          </div>
        </form>
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default Profile;
