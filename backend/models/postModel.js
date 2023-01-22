import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true },
    image: { type: String, required: true }, // 679 x 829
    author: { type: String, required: true },
    date_published: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);
export default Post;
