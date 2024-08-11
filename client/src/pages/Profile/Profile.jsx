import { useContext } from "react";
import Posts from "../../components/posts/Posts";
import "./profile.scss";
import moment from "moment";
import { Cake, Favorite, Place } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";

//TODO: add conditional relationship status icon: i.e., single - empty heart; in a relationship - filled heart
const Profile = () => {
  const { user: currentUser } = useContext(AuthContext);

  const userId = useLocation().pathname.split("/")[2].substring(1);

  const { isLoading, error, data } = useQuery(["user"], async () => {
    try {
      const res = await makeRequest.get(`/users/find/${userId}`);
      return res.data;
    } catch (error) {
      return error;
    }
  });

  const handleFollow = (e) => {
    e.preventDefault();

    
  }

  return (
    <div className="profile">
      <div className="images">
        <img src={data?.coverPic} alt="" className="coverPic" />
        <img src={data?.profilePic} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="userDetails">
            <span className="userName">{data?.name}</span>
            <span className="userEmail">{data?.email}</span>
            <div className="additionalInfo">
              <div className="item">
                <Place />
                <span>{data?.city}</span>
              </div>
              <div className="item">
                <Cake />
                <span>{moment(data?.dob).format("YYYY-MM-DD")}</span>
              </div>
              <div className="item">
                <Favorite />
                <span>{data?.relationshipStatus}</span>
              </div>
            </div>
            {parseInt(userId) === currentUser.id ? (
              <button>Manage my profile</button>
            ) : (
              <button onClick={handleFollow}>Follow {data?.name} on Chora's Den</button>
            )}
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
