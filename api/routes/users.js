import express from "express";
import {} from "../controllers/user.js"
import { fetchUser } from "../controllers/user.js";

const router = express.Router();

router.get("/find/:userId", fetchUser);

export default router