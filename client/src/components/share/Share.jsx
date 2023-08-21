import { useContext } from "react";
import "./share.scss";
import { AuthContext } from "../../context/AuthContext";
import { Image, Person, Place } from "@mui/icons-material";

const Share = () => {
  const { user: currentUser } = useContext(AuthContext);

  return (
    <div className="share">
      <div className="container">
        <div className="mainContent">
          <div className="postContent">
            <img src={currentUser.profilePic} alt="" />
            <input
              type="text"
              className="postText"
              placeholder={`What's on your mind ${currentUser.name}?`}
            />
          </div>
          <div className="glassHolder">
            <img src="/assets/glass.gif" alt="" />
          </div>
        </div>
        <div className="bottomBar">
          <div className="attachments">
            <div className="item">
              <Image />
              <span>Add Image</span>
            </div>
            <div className="item">
              <Place />
              <span>Add Location</span>
            </div>
            <div className="item">
              <Person />
              <span>Tag a friend</span>
            </div>
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
