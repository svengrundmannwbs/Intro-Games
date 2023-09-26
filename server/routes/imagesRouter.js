import express from "express";
import {
  getImages,
  getImageById,
  addImage,
  updateImage,
  deleteImage,
} from "../controllers/images.js";

// images
const imagesRouter = express.Router();
imagesRouter.route("/").get(getImages).post(addImage);
imagesRouter
  .route("/:id")
  .get(getImageById)
  .put(updateImage)
  .delete(deleteImage);

export default imagesRouter;
