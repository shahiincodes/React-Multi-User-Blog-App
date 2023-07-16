import React from "react";
import "./singlePost.css";
import img from "./1681750909522IMG_1510 (1).JPG";

function SinglePost({post}) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImage" src={img} alt="" />
        
          <h2 className="postTitle">{post.title}
              <div className="editdelete">
                <span>
                  <i className="editIcon editdeleteIcon fa-regular fa-pen-to-square"></i>
                </span>
                <span>
                  <i className="deleteIcon editdeleteIcon fa-sharp fa-solid fa-trash"></i>
                </span>
              </div>
          </h2>
          
        
        <div className="authordetail">
          <div className="author">
            <span>
              Author :<i>Aslam Ali</i>
            </span>
            <span>
              designation :<i>Suply chain management at Relience</i>
            </span>
          </div>
          <span className="time">{new Date(post.createdAt).toDateString()}</span>
        </div>

        <p className="postDetails">
          {post.content}
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
