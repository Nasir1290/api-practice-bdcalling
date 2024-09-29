import posts from "../../db";

const getAllPost = () => {
  const allPosts = posts;
  return allPosts;
};

const getSinglePost = (id) => {
  try {
    const post = posts.find((post) => post.id === id);
    return post;
  } catch (error) {
    throw new Error("User not Exis with this id");
  }
};

const updateSinglePost = (id, valueToUpdate) => {
  try {
    const updatedPosts = posts.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          ...valueToUpdate,
        };
      }
    });
    const updatePost = posts.find((p) => p.id === id);
    return updatePost;
  } catch (error) {
    throw new Error("User not Exis with this id");
  }
};

const deleteAPost = (id) => {
  try {
    const updatedPosts = posts.filter((p) => p.id !== id);
    return updatedPosts;
  } catch (error) {
    throw new Error("User not Exis with this id");
  }
};

const createNewPost = (post) => {
  try {
    const insertNewPost = posts.push(post);
    return post;
  } catch (error) {
    throw new Error("Try to a valid post");
  }
};

export const postServices = {
  getAllPost,
  getSinglePost,
  updateSinglePost,
  updateSinglePost,
  deleteAPost,
};
