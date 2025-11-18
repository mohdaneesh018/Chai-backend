import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddBlog() {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    author: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/blogs", formData)
    toast.success("Blog Added Successfully.");
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
        background: "#f2f2f2",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "26px",
          color: "black"
        }}
      >
        Create Blog
      </h2>

      {/* Blog Title */}
      <input
        type="text"
        placeholder="Blog Title"
        onChange={(e) =>
          setFormData({ ...formData, title: e.target.value })
        }
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      />

      {/* Blog Text */}
      <textarea
        placeholder="Write your text..."
        onChange={(e) =>
          setFormData({ ...formData, text: e.target.value })
        }
        style={{
          width: "90%",
          height: "120px",
          padding: "10px",
          marginBottom: "12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px",
          resize: "vertical"
        }}
      />

      {/* Author */}
      <input
        type="text"
        placeholder="Author Name"
        onChange={(e) =>
          setFormData({ ...formData, author: e.target.value })
        }
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        style={{
          width: "95%",
          background: "#4CAF50",
          color: "white",
          padding: "12px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "18px",
          marginTop: "10px"
        }}
      >
        Submit
      </button>
    </div>
  );
}
