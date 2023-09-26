import express from "express";
import articlesRouter from "./routes/articlesRouter.js";
import gamesRouter from "./routes/gamesRouter.js";
import imagesRouter from "./routes/imagesRouter.js";

const app = express();
const PORT = 8000;

app.use(express.json());
//ROUTES
app.use("/articles", articlesRouter);
app.use("/games", gamesRouter);
app.use("/image", imagesRouter);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
