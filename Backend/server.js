import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose"; 
import BlogRouter from "./routes/blog.route.js";


dotenv.config();

const app = express();

app.use(express.json());
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

app.use("/api/blogs", BlogRouter);

const port = 3000;
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Hello Aneesh, Database is connected for Practice.")
    })
    .catch((error) => {
        console.log(error, "connection error MongoDB");
    });

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
