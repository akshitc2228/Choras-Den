import { useContext, useState, useEffect } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/AuthContext";
import { Forward } from "@mui/icons-material";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import moment from "moment";

const Comments = ({postId, setCommentCount}) => {
  const {user: currentUser} = useContext(AuthContext);
  const [ commentDesc, setCommentDesc ] = useState("");

  const queryClient = useQueryClient();

  //fetch comments from postId
  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get(`/comments?postId=${postId}`).then((res) => {
      return res.data;
    })
  );

  useEffect(() => {
    if (data) {
      setCommentCount(data.length);
    }
  }, [data, setCommentCount]);

  const mutation = useMutation((newComment) => {
    return makeRequest.post(`/comments/`, newComment)
  },  {
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"])
    }
  })

  const submitNewComment = (e) => {
    e.preventDefault();

    try {
      mutation.mutate({ commentDesc, postId })
      setCommentDesc("");
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Your thoughts?" value={commentDesc} onChange={(e) => setCommentDesc(e.target.value)}/>
        <button onClick={submitNewComment}>
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
          <span className="date">{moment(comment.createdAt).fromNow()}</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
