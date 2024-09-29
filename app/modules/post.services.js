import posts from "../../db/index.js";

const getAllPost = () => {
  const allPosts = posts;
  return allPosts;
};

const getSinglePost = (id) => {
  try {
    const post = posts.find((p) => p._id === id);
    return post;
  } catch (error) {
    throw new Error("User not Exis with this id");
  }
};

const updateSinglePost = (id, valueToUpdate) => {
  try {
    const updatedPosts = posts.map((p) => {
      if (p._id === id) {
        return {
          ...p,
          ...valueToUpdate,
        };
      }
      return p;
    });
    const updatePost = posts.find((p) => p._id === id);
    return updatePost;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteAPost = (id) => {
  try {
    const deletedPost = posts.find((p) => p._id === id);
    const updatedPosts = posts.filter((p) => p.id !== id);
    return deletedPost;
  } catch (error) {
    throw new Error("User not Exis with this id");
  }
};

const createNewPost = (post) => {
  try {
    const newPost = {
      _id: crypto.randomUUID(),
      ...post,
    };
    const insertNewPost = posts.push(newPost);
    return newPost;
  } catch (error) {
    throw new Error("Try to a valid post");
  }
};

export const postServices = {
  getAllPost,
  getSinglePost,
  updateSinglePost,
  deleteAPost,
  createNewPost,
};
