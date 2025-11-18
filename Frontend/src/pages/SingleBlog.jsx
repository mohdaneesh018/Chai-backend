import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");

  const loadBlog = async () => {
    const res = await axios.get(`http://localhost:3000/api/blogs/${id}`);
    setBlog(res.data.blog);
  };

  useEffect(() => {
    loadBlog();
  }, []);

  const addComment = async () => {
    await axios.post(`http://localhost:3000/api/blogs/${id}/comment`, {
      user,
      comment,
    });

    loadBlog();
    setUser("");
    setComment("");
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "30px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      {blog && (
        <>

          {/* BLOG TITLE */}
          <h2
            style={{
              fontSize: "30px",
              marginBottom: "10px",
            }}
          >
            {blog.title}
          </h2>

          {/* AUTHOR */}
          <p
            style={{
              color: "gray",
              marginBottom: "15px",
              fontSize: "14px",
            }}
          >
            By {blog.author}
          </p>

          {/* BLOG TEXT */}
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              marginBottom: "30px",
            }}
          >
            {blog.text}
          </p>

          {/* COMMENTS HEADING */}
          <h3
            style={{
              fontSize: "22px",
              marginBottom: "15px",
            }}
          >
            Comments
          </h3>

          {/* SHOW COMMENTS */}
          {blog.comments.length === 0 ? (
            <p style={{ color: "gray" }}>No comments yet. Be the first!</p>
          ) : (
            blog.comments.map((c) => (
              <div
                key={c._id}
                style={{
                  background: "black",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                  border: "1px solid #ccc",
                }}
              >
                <strong style={{ color: "white" }}>{c.user}</strong>
                <p style={{ margin: "5px 0", color: "gray" }}>{c.comment}</p>
              </div>
            ))
          )}

          {/* ADD COMMENT SECTION */}
          <div
            style={{
              marginTop: "30px",
              padding: "15px",
              background: "black",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>
              Add Comment
            </h4>

            <input
              type="text"
              placeholder="Your name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              style={{
                width: "90%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                marginBottom: "20px",
              }}
            />

            <input
              type="text"
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{
                width: "90%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
            />

            <button
              onClick={addComment}
              style={{
                padding: "10px 20px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Post Comment
            </button>
          </div>
        </>
      )}
    </div>
  );
}
