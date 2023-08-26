import Posts from "../../components/posts/Posts";
import "./profile.scss";
import { Cake, Favorite, Place } from "@mui/icons-material";

//TODO: add conditional relationship status icon: i.e., single - empty heart; in a relationship - filled heart
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
            <div className="additionalInfo">
              <div className="item">
                <Place />
                <span>Limbo City</span>
              </div>
              <div className="item">
                <Cake />
                <span>31/12/100</span>
              </div>
              <div className="item">
                <Favorite />
                <span>Double</span>
              </div>
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
