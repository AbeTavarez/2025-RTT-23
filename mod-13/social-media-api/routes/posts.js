import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// Create a new post
router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status;
  }
});

// get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// get all posts for an user
// endpoint -> /api/posts/user/:username
router.get("/user/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const userPosts = await Post.find({ author: username });
    res.json(userPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// search for posts
router.get("/search", async (req, res) => {
  const { author, hidden } = req.query;
  try {
    const posts = await Post.find({ $and: [{ author }, { hidden }] });
    // const posts = await Post.find({$or: [{author}, {hidden}]});
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// update a post
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // const updatedPost = await Post.findOneAndUpdate(
    //   { title: "A Brand New Post" },
    //   req.body,
    //   {
    //     new: true,
    //     upsert: true,
    //   },
    // );

    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.json(deletedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
