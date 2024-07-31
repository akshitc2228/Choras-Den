import moment from "moment";
import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getComments = (req, res) => {
  const q = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN user AS u ON (u.id = c.userId) WHERE c.postId = ? ORDER BY c.createdAt DESC`;

  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const postComment = (req, res) => {
  //first verify user:
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("not logged in");

  jwt.verify(token, process.env.TOKEN_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const insertComment =
      "INSERT INTO comments(`desc`, `createdAt`, `userId`, `postId`) VALUES(?,?,?,?)";

    const values = [
      req.body.commentDesc,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      req.body.postId,
    ];

    db.query(insertComment, values, (err, data) => {
      if(err) return res.status(500).json(err)
        return res.status(200).json("Comment added successfully");
    })
  });
};
