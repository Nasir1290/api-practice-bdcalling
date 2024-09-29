import express from "express";
import postRouter from "./app/modules/post.route.js";

const app = express();
app.use(express.json());
app.use("/api/v1/posts", postRouter);

export default app;
