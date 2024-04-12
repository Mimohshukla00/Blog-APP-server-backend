const Post = require("../models/postModel");
const comment = require("../models/commentModel");

// logicc

exports.createComment = async (req, res) => {
  try {
    // fetch data from body
    const { post, user, body } = req.body;
    // create a comment object
    const comment = new Comment({
      post,
      user,
      body,
    });

    // save comment into the database
    await comment.save();
  } catch (error) {}
};
