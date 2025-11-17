import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

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
      <h2>Chai And full Stack.</h2>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
