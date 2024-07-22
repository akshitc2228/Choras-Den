import express from "express";
import {} from "../controllers/comment.js";
import { getComments } from "../controllers/comment.js";

const router = express.Router();

router.get("/", getComments)

export default router;
