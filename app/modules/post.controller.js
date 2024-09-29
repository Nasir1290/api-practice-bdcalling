import { postServices } from "./post.services";

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
    const { id } = req.body;
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
    const { id, valueToUpdate } = req.body;
    const updatedPost = await postServices.updateSinglePost(id, valueToUpdate);
    res.status(200).json({
      success: true,
      message: "Retrieved all posts successfully.",
      data: updatedPost,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to update posts !",
    });
  }
};

export const postControllers = {
  getAllPost,
  getSinglePost,
  updateSinglePost,
};
