// import mongoose

const mongoose = require("mongoose");

// route handler
const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", // reference to the post model
    required: true,
  },
  user: {
    type: String,
    ref: "User", // reference to the user model
  },
  body: {
    type: String,
    required: true,
  },
});
module.exports=mongoose.model("Comment",commentSchema);
