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
          <span>Jane Doe</span>
          <span>Doe.Jane@fakemail.com</span>
          <div className="item">
            <Place />
            <span>Limbo City</span>
          </div>
          <button>Follow Jane Doe on Chora's Den</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
