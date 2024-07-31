import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ModalContext } from "../../context/ModalContext";
import { Close } from "@mui/icons-material";

//need to fetch user details from DB which will include cover and profile picture OR just use the authContext to fetchUser
//latter option can work

const Update = () => {

  console.log("Update method has been called from Navbar account settings button");
  //it is not a great idea to have the profile details in client side storage such as photos
  //sensitive data like personal photos can be accessed so hide it in DB and fetch from there.
  const { user: currentUser } = useContext(AuthContext);
  const { renderModal, toggleModal } = useContext(ModalContext);

  return (
    <div className="updateModalContainer">
      <div className="updateModal">
        <div className="updateModalTop">
          <div className="closePopup">
            <button onClick={toggleModal}>
              <Close/>
            </button>
          </div>
          <div className="updatePictures">
            <div className="coverChange">
              <img src={currentUser.coverPic} alt="" />
              <input
                type="file"
                id="coverUpload"
                accept=".png .jpeg .jpg .webp"
              />
            </div>
            <div className="pfpChange">
              <img src={currentUser.profilePic} alt="" />
              <input
                type="file"
                id="coverUpload"
                accept=".png .jpeg .jpg .webp"
              />
            </div>
          </div>
        </div>
        <div className="updateDetails">
            <input type="text" placeholder="change your email address"/>
            <input type="text" placeholder="change your profile name"/>
            <input type="password" placeholder="change your password"/>
            <input type="text" placeholder="Shifted to a new town?"/>
            <input type="date" placeholder="Dummy really forgot their DOB...(¬_¬)"/>
            <input type="text" placeholder="Change relationship status"/>
        </div>
      </div>
    </div>
  );
};

export default Update;
