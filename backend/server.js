import express from 'express';
import { restart } from 'nodemon';
import data from './data.js';

const app = express();

app.get('/api/posts', (req, res) => {
  res.send(data.posts);
});

app.get('/api/posts/slug/:slug', (req, res) => {
  const post = data.posts.find((x) => x.slug === req.params.slug);
  if (post) {
    res.send(post);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
