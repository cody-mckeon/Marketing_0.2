import express from 'express';
import Post from '../models/postModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Post.remove({});
  const createdPosts = await Post.insertMany(data.posts);
  res.send({ createdPosts });
});

export default seedRouter;
