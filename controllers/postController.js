const asyncHandler = require("../middleware/async");
const Post = require("../models/Post");

// @desc    Get all posts
// @route   GET /api/v1/post
// @acces   Public
exports.getAllPosts = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});
