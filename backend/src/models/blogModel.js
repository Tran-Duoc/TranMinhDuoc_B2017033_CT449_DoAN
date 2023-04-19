const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blog = new Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    content: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    imgPath: {
      type: "string",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("blog", blog);
