import express from "express";
import articlesRouter from "./routes/articlesRouter.js";
import gamesRouter from "./routes/gamesRouter.js";
import imagesRouter from "./routes/imagesRouter.js";
import searchRouter from "./routes/searchRouter.js";
import cors from "cors";

const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());
//ROUTES
app.use("/articles", articlesRouter);
app.use("/games", gamesRouter);
app.use("/search", searchRouter);
app.use("/image", imagesRouter);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
