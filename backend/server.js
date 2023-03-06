import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import postRouter from './routes/postRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

//Implement SignInApi
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedRouter);
app.use('/api/posts', postRouter);
app.use('/api/users', userRouter); //signinApi

// publishing to Heroku step 2
const __dirname = path.resolve();
// publishing to Heroku step 3 creating middleware
// serve all files in front end build folder as a static files
app.use(express.static(path.join(__dirname, '/frontend/build')));
// publishing to Heroku step 4
// everything that user enters domain or server name is going to be served
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
