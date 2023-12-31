import express from "express";
import { getAllGames } from "../controllers/games.js";

const gamesRouter = express.Router();

gamesRouter.route("/").get(getAllGames);

export default gamesRouter;
