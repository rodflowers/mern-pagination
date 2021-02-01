const asyncHandler = require("../middleware/async");
const Post = require("../models/Post");

exports.getAllPosts = asyncHandler(async (req, res, next) => {
  try {
    console.log("GET ALL POST");
  } catch (error) {
    console.log(err);
    res.status(401).json({
      err: "Token expirado o inválido",
    });
  }
});
