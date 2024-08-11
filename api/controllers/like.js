import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const fetchLikes = (req, res) => {
  const fetchQuery = "SELECT userId FROM likes WHERE postId = ?";

  db.query(fetchQuery, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(error);
    return res.status(200).json(data.map(like => like.userId));
  });
};

export const likePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json("Not logged in");
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid token");

    const likeQuery = "INSERT INTO likes(`userId`, `postId`) VALUES(?, ?)";

    const values = [userInfo.id, req.body.postId];

    db.query(likeQuery, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("liked post");
    });
  });
};

export const removeLike = (req, res) => {
  console.log(req);
  const deletionQuery = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";

  const values = [req.user.id, req.query.postId];

  db.query(deletionQuery, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("removed like from post");
  });
};
