import express from 'express';
import Post from '../models/postModel.js';

const postRouter = express.Router();

postRouter.get('/', async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

postRouter.get('/slug/:slug', async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  if (post) {
    res.send(post);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

postRouter.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    res.send(post);
  } else {
    res.status(404).send({ message: 'Post Not Found' });
  }
});

export default postRouter;
