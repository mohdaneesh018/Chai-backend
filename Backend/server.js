import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "A First Joke", content: "This is first joke." },
    { id: 2, title: "A second Joke", content: "This is second joke." },
    { id: 3, title: "A Third Joke", content: "This is third joke." },
    { id: 4, title: "A Fourth Joke", content: "This is fourth joke." },
    { id: 5, title: "A Fifth Joke", content: "This is fifth joke." },
  ];
  res.send(jokes);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
