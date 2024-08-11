import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const fetchFollowRelationships = (req, res) => {
  const userId = req.params.userId;
  const followType = req.query.followType;

  let fetchQuery;
  if (followType === 'followers') {
    fetchQuery = "SELECT followerUserId FROM relationships WHERE followedUserId = ?";
  } else if (followType === 'following') {
    fetchQuery = "SELECT followedUserId FROM relationships WHERE followerUserId = ?";
  } else {
    return res.status(400).json("Invalid type");
  }

  db.query(fetchQuery, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map(relationship => followType === 'followers' ? relationship.followerUserId : relationship.followedUserId));
  });
};