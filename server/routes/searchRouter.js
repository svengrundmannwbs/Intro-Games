import express from "express";
import { getAllGames } from "../controllers/search.js";

const searchRouter = express.Router();

searchRouter.route("/").get(getAllGames);

export default searchRouter;
