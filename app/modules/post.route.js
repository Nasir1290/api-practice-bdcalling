import { Router } from "express";
import { postControllers } from "./post.controller.js";


const postRouter = Router();
postRouter.route("/").get(postControllers.getAllPosts);
postRouter.route("/:id").get(postControllers.getSinglePost);
postRouter.route("/:id").patch(postControllers.updateSinglePost);
postRouter.route("/:id").delete(postControllers.deletePost);
postRouter.route("/").post(postControllers.createNewPost);



export default postRouter;
