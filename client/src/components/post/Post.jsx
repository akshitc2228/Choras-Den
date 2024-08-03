import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  MoreHoriz,
  ShareOutlined,
  TextsmsOutlined,
} from "@mui/icons-material";
import "./post.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Comments from "../comments/Comments";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const queryClient = useQueryClient();

  const { user: currentUser } = useContext(AuthContext);

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  /*   const [likedUsers, setLikedUsers] = useState([]);
  const [hasUserLiked, setHasUserLiked] = useState(false); */

  const handleCommentCount = (count) => {
    setCommentCount(count);
  };

  const { isLoading, error, data } = useQuery(["likes", post.id], () => {
    try {
      makeRequest.get(`/likes?postId=${post.id}`).then((res) => {
        return res.data;
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });

  /*   useEffect(() => {
    if (data) {
      const users = Array.isArray(data) ? data.map((like) => like.userId) : [];
      setLikedUsers(users);
      setHasUserLiked(users.includes(currentUser.id));
    }
  }, [data, currentUser.id]); */

  const mutation = useMutation(
    (liked) => {
      if (!liked) return makeRequest.post("/likes/", post.id);
      else return makeRequest.delete(`/likes?postId=${post.id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["likes"]);
        console.log(
          "After hitting the like button (onSuccess of mutation method): "
        );
        /*         console.log(likedUsers);
        console.log(hasUserLiked); */
      },
    }
  );

  const handleLike = () => {
    try {
      console.log(data);
      console.log("Is the data list undefined?:");
      console.log(data ? "true" : "false");
      /*       console.log(likedUsers);
      console.log(hasUserLiked); */
      mutation.mutate(data?.includes(currentUser.id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userDetails">
            <Link to={`/profile/:${post.userId}`}>
              <img src={post.profilePic} alt="" />
            </Link>
            <div className="details">
              <Link
                to={`/profile/:${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHoriz />
        </div>
        <div className="content">
          <p>{post.des}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="interactions">
          <div className="item">
            {isLoading ? (
              "loading..."
            ) : data?.includes(currentUser.id) ? (
              <FavoriteOutlined onClick={handleLike} />
            ) : (
              <FavoriteBorderOutlined onClick={handleLike} />
            )}
            {data?.length} Likes {/* data?.length : 0 */}
          </div>
          <div className="item" onClick={() => setCommentsOpen(!commentsOpen)}>
            <TextsmsOutlined />
            {commentCount}
          </div>
          <div className="item">
            <ShareOutlined />
            Share
          </div>
        </div>
        {commentsOpen && (
          <Comments postId={post.id} setCommentCount={handleCommentCount} />
        )}
      </div>
    </div>
  );
};

export default Post;
