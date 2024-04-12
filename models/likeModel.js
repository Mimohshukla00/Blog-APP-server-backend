// import mongoose

const mongoose = require("mongoose");

// route handler
const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", // reference to the post model
    required: true,
  },
  user: {
    type: String,
    ref: "User", // reference to the user model
  },

});
// export
module.exports = mongoose.model("Like", likeSchema);
