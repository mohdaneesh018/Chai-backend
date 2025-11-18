import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import AddBlog from './pages/AddBlog';
import ViewBlog from './pages/ViewBlog';
import SingleBlog from './pages/SingleBlog';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      {/* <h2>Chai And full Stack.</h2>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      } */}

      <Routes>
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/blogs" element={<ViewBlog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </>
  )
}

export default App
