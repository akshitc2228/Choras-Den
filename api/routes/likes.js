import express from "express";
import {} from "../controllers/like.js";
import { fetchLikes, likePost, removeLike } from "../controllers/like.js";
import AuthMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", fetchLikes);
router.post("/", AuthMiddleware, likePost);
router.delete("/", AuthMiddleware, removeLike);

export default router;
