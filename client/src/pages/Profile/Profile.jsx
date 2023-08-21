import Posts from "../../components/posts/Posts";
import "./profile.scss";
import { Place } from "@mui/icons-material";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="/assets/random post.jpg" alt="" className="coverPic" />
        <img src="/assets/jane-doe.jpg" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="userDetails">
            <span className="userName">Jane Doe</span>
            <span className="userEmail">Doe.Jane@fakemail.com</span>
            <div className="item">
              <Place />
              <span>Limbo City</span>
            </div>
            <button>Follow Jane Doe on Chora's Den</button>
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
