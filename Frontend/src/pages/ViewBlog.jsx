import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ViewBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/blogs").then((res) => {
      setBlogs(res.data.blogs);
    });
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "28px"
        }}
      >
        All Blogs
      </h2>

      {blogs.map((blog) => (
        <div
          key={blog._id}
          style={{
            background: "blue",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>
            {blog.title}
          </h3>

          <p
            style={{
              color: "black",
              fontWeight: "Bold",
              marginBottom: "10px",
              fontSize: "14px",
            }}
          >
            By: {blog.author}
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "15px",
            }}
          >
            {blog.text.slice(0, 120)}...
          </p>

          <Link
            to={`/blog/${blog._id}`}
            style={{
              display: "inline-block",
              padding: "10px 15px",
              background: "#4CAF50",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}
