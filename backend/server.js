import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/posts', (req, res) => {
  res.send(data.posts);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
