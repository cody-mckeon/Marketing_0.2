import express from 'express';
import Post from '../models/postModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Post.remove({});
  const createdPosts = await Post.insertMany(data.posts);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdUsers, createdPosts });
});

export default seedRouter;
