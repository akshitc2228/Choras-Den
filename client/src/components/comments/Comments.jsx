import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/AuthContext";
import { Forward } from "@mui/icons-material";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";

const Comments = ({postId}) => {
  const {user: currUser} = useContext(AuthContext);

  //fetch comments from postId
  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get(`/comments?postId=${postId}`).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="comments">
      <div className="write">
        <img src={currUser.profilePic} alt="" />
        <input type="text" placeholder="Your thoughts?" />
        <button>
          <Forward />
        </button>
      </div>
      {isLoading ? "loading..." : data.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">moments ago...</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
