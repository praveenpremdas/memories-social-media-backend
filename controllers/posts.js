import PostMessage from "../models/postMessage.js";

export const getposts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newpost = new PostMessage(post);

  try {
    await newpost.save();
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
