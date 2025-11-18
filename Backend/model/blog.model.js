import mongoose, { Schema } from "mongoose";

const ReplySchema = new Schema({
    user: String,
    reply: String,
    createdAt: { type: Date, default: Date.now }
});

const CommentSchema = new Schema({
    user: String,
    comment: String,
    createdAt: { type: Date, default: Date.now },
    replies: [ReplySchema]
});

const BlogSchema = new Schema({
    text: String,
    author: String,
    title: String,
    createdAt: { type: Date, default: Date.now },
    comments: [CommentSchema]
});

const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;