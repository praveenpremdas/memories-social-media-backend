import express from "express";
import { getposts } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getposts);

export default router;
