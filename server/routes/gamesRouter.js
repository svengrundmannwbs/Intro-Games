import express from 'express';
import {
    getAllGames
} from '../controllers/games.js';

const gamesRouter = express.Router();

booksRouter.route('/').get(getAllGames)

export default gamesRouter;