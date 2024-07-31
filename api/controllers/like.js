import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const fetchLikes = (req, res) => {
  const fetchQuery = "SELECT userId FROM likes WHERE postId = ?";

  db.query(fetchQuery, req.query.postId, (err, data) => {
    if (err) return res.status(500).json(error);
    return res.status(200).json(data.map((like) => like.userId));
  });
};

export const likePost = (req, res) => {
  const likeQuery = "INSERT INTO likes(`userId`, `postId`) VALUES(?, ?)";

  const values = [userInfo.id, req.body.postId];

  db.query(likeQuery, values, (error, res) => {
    if (error) return res.status(500).json(error);
    return res.status(200).json("Liked post");
  });
};

export const removeLike = (req, res) => {
  const deletionQuery = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";

  const values = [userInfo.id, req.body.postId];

  db.query(deletionQuery, values, (error, res) => {
    if (error) return res.status(500).json(error);
    return res.status(200).json("removed like from post");
  });
};
