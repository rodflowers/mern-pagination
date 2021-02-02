const express = require("express");
const advancedResults = require("../middleware/advancedResults");
const Posts = require("../models/Post");

const { getAllPosts } = require("../controllers/postController");

const router = express.Router();

router.route("/").get(advancedResults(Posts, ""), getAllPosts);

module.exports = router;
