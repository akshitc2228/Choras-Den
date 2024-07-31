import express from "express";
import {} from "../controllers/comment.js";
import { getComments, postComment } from "../controllers/comment.js";

const router = express.Router();

router.get("/", getComments)
router.post("/", postComment)

export default router;
