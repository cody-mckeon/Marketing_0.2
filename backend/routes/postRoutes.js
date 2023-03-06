import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';
import { isAuth, isAdmin } from '../utils.js';

const postRouter = express.Router();

postRouter.get('/', async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

postRouter.get(
  '/admin',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const page = query.page || 1;
    const posts = await Post.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    const countPosts = await Post.countDocuments();
    res.send({
      posts,
      countPosts,
      page,
      pages: Math.ceil(countPosts / pageSize),
    });
  })
);

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
