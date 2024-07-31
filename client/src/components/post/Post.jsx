import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  MoreHoriz,
  ShareOutlined,
  TextsmsOutlined,
} from "@mui/icons-material";
import "./post.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Comments from "../comments/Comments";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const { currentUser } = useContext(AuthContext);

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  const handleCommentCount = (count) => {
    setCommentCount(count);
  };

  const { isLoading, error, data } = useQuery(["likes"], () => {
    try {
      makeRequest.get(`/likes?postId=${post.id}`).then((res) => {
        return res.data;
      });
    } catch (error) {
      console.log(error);
    }
  });

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
            {data.includes(currentUser.id) ? (
              <FavoriteOutlined />
            ) : (
              <FavoriteBorderOutlined />
            )}
            {data ? data.length : 0} Likes
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
