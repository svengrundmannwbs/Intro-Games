import express from "express";
import { getArticles } from "../controllers/articles.js";

// articles
const articlesRouter = express.Router();
articlesRouter.route("/").get(getArticles);

export default articlesRouter;
