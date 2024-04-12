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
    const savedComment = await comment.save();
    // find the post by id and add the new comment to the post
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments") // populate the comments array with comment documents
      .exec();
    // send the updated post as a response
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error While creating comment",
    });
  }
};
