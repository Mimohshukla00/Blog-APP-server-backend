// import
const mongoose = require("mongoose");
// route handler
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  likes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// export

exports.module = mongoose("Post", postSchema);
