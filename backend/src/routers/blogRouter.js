const express = require("express");
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const router = express.Router();

//get blogs

router.get("/blogs", getBlogs);

// get blog

router.get("/blog/:id", getBlog);

// create blog

router.post("/create", createBlog);

// update blog

router.put("/update/:id", updateBlog);

// remove blog

router.delete("/delete/:id", deleteBlog);

module.exports = router;
