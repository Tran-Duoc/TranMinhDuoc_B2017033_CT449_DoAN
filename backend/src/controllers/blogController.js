const blogModel = require("../models/blogModel");

const blogController = {
  getBlogs: async (_, res) => {
    try {
      const blogs = await blogModel.find();
      if (blogs) {
        return res.status(200).json({
          success: true,
          message: "Get blogs successfully",
          blogs,
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error: " + error.message,
      });
    }
  },
  getBlog: async (req, res) => {
    try {
      const { id } = req.params;
      const blog = blogModel.findById({ _id: id });
      if (blog) {
        return res.status(200).json({
          success: true,
          message: "Get blog successfully",
          blog,
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error: " + error.message,
      });
    }
  },
  createBlog: async (req, res) => {
    try {
      const { title, content, author, created_at, imgPath } = req.body;
      // simple validate
      if (!title || !content || !author || !created_at) {
        return res.status(404).json({
          success: false,
          message: "Item cant null",
        });
      }
      const blog = new blogModel({
        title: title,
        content: content,
        author: author,
        created_at: created_at,
        imgPath: imgPath,
      });
      await blog.save();
      return res.status(200).json({
        success: true,
        message: "Item created successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error: " + error.message,
      });
    }
  },
  deleteBlog: async (req, res) => {
    try {
      const { id } = req.params;
      const deleteBlog = await blogModel.findByIdAndRemove({ _id: id });
      if (!deleteBlog) {
        return res.status(404).json({
          success: false,
          message: "Cant delete blog item",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Delete blog item successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error: " + error.message,
      });
    }
  },
  updateBlog: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content, author, created_at, imgPath } = req.body;

      let updateBlog = {
        title: title,
        content: content,
        author: author,
        created_at: created_at,
        imgPath: imgPath,
      };

      updateBlog = await blogModel.findByIdAndUpdate({ _id: id }, updateBlog, {
        new: true,
      });
      if (!updateBlog) {
        return res.status(404).json({
          success: false,
          message: "Cant update blog",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Updated blog",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error: " + error.message,
      });
    }
  },
};

module.exports = blogController;
