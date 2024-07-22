import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  MoreHoriz,
  ShareOutlined,
  TextsmsOutlined,
} from "@mui/icons-material";
import "./post.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments";
import moment from "moment";

const Post = ({ post }) => {
  const [commentsOpen, setCommentsOpen] = useState(false);
  //TEMP
  const liked = false;

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
              <span className="date">
                {moment(post.createdAt).fromNow()}
              </span>
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
            {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            114 likes
          </div>
          <div className="item" onClick={() => setCommentsOpen(!commentsOpen)}>
            <TextsmsOutlined />3 comments
          </div>
          <div className="item">
            <ShareOutlined />
            Share
          </div>
        </div>
        {commentsOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
