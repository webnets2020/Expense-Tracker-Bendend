import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
const app = express();
app.use(cors());


await mongoose
  .connect(
    "mongodb+srv://chencho:1234@expenses-mern.gjvdyft.mongodb.net/?retryWrites=true&w=majority"
  )
  console.log("MongoDB connection successfull...!")

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () =>
  console.log(`Server running on port no: http://localhost:${PORT}`)
);
