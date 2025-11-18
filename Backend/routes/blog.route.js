import { Router } from "express";
import Blog from "../model/blog.model.js";

const BlogRouter = Router();

BlogRouter.post("/", async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.json({ success: true, blog });
    } catch (error) {
        res.json({ success: false, error });
    }
});

BlogRouter.get("/", async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ success: true, blogs });
});

BlogRouter.get("/:id", async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.json({ success: true, blog });
});

BlogRouter.post("/:id/comment", async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    blog.comments.push(req.body);
    await blog.save();
    res.json({ success: true, blog });
});

BlogRouter.post("/:blogId/comment/:commentId/reply", async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    const comment = blog.comments.id(req.params.commentId);
    comment.replies.push(req.body);
    await blog.save();
    res.json({ success: true, blog });
})

export default BlogRouter;