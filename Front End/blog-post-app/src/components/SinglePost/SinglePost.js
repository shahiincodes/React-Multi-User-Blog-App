import React from "react";
import "./singlePost.css";
import img from "./1681750909522IMG_1510 (1).JPG";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImage" src={img} alt="" />
        
          <h2 className="postTitle">Lorem ipsum dolor sit amet.
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
          <span className="time">1 hour ago</span>
        </div>

        <p className="postDetails">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          deserunt exercit ationem cumque non vitae nihil iusto tempora aliquid
          rem animi amet esse moles tiae nemo, aperiam nobis necessitatibus unde
          dolore dolorem?Lorem ipsum dolor s it amet consectetur adipisicing
          elit. In dolores, facilis hic repudiandae vero cu piditate iure sed
          exercitationem doloribus ad quis aspernatur autem nam assumenda labore
          aliquid architecto, voluptate est!Lorem Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tenetur ipsam sint saepe ab obcaecati
          aperiam unde sed vel mollitia cumque dignissimos tempore soluta iure,
          suscipit, maxime modi asperiores nulla voluptas. Hic rem velit
          repellat iusto? Commodi natus facilis odit cumque sed magni fugit
          dolorum sit maxime? Doloribus natus mollitia, quibusdam, nemo autem
          error inventore, sapiente quis tenetur alias aspernatur tempora. Sed
          quidem, repellat dicta eaque, cumque recusandae quia modi laboriosam
          corrupti velit nihil corporis a, iusto eligendi esse impedit placeat
          quasi consectetur voluptatem. Adipisci, perferendis tempore eaque
          dolorem ipsum dolorum? Porro laboriosam dolorum voluptatem ducimus
          fugiat quaerat laboriosam ducimus. Iusto tempore nemo minima pariatur
          atque, perspiciatis tempore nobis ea aspernatur consequatur pariatur,
          quos a. Voluptates
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
