// const express = require("express");
import express from "express";
// import { users } from "./data.js";
import axios from "axios";

// console.log(users);
const app = express();
const port = process.env.PORT || 4000;
const url = "https://jsonplaceholder.typicode.com/posts";
// app.get("/", (req, res) => {
//   res.send({
//     message: "Hello World!",
//     total_Users: users.length,
//     users: users,
//   });
// });
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Homepage!!!",
  });
});
app.get("/students", async (req, res) => {
  try {
    const response = await axios.get(url);
    res.status(200).json({
      message: "List of Students",
      total_students: response.data.length,
      students: response.data,
    });
  } catch (err) {
    app.status(400).json({
      message: "data not found",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
