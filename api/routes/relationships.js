import express from "express";
import { fetchFollowRelationships } from "../controllers/relationship.js";

const router = express.Router();

router.get("/:userId", fetchFollowRelationships);

export default router;
