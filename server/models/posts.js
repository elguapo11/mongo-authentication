const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    // Your post schema definition goes here
    Title: String,
    Content: String,
    Tag: String,
    // ... other fields
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
