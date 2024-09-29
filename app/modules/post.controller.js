import { postServices } from "./post.services.js";

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await postServices.getAllPost();
    res.status(200).json({
      success: true,
      message: "Retrieved all posts successfully.",
      data: allPosts,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed retrieved all posts !",
    });
  }
};

const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postServices.getSinglePost(id);
    res.status(200).json({
      success: true,
      message: "Retrieved all posts successfully.",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed retrieved post !",
    });
  }
};

const updateSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const  valueToUpdate = req.body;
    const updatedPost = await postServices.updateSinglePost(id, valueToUpdate);
    res.status(200).json({
      success: true,
      message: "Post updated successfully.",
      data: updatedPost,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to update posts !",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await postServices.deleteAPost(id);
    res.status(200).json({
      success: true,
      message: "Post deleted successfully!",
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed retrieved all posts !",
    });
  }
};

const createNewPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = await postServices.createNewPost(post);
    res.status(200).json({
      success: true,
      message: "New Post Created successfully.",
      data: newPost,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to create posts !",
    });
  }
};

export const postControllers = {
  getAllPosts,
  getSinglePost,
  updateSinglePost,
  deletePost,
  createNewPost,
};
