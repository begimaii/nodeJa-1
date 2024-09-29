// const express = require("express");
import express from "express";
import { users } from "./data.js";

console.log(users);
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send({
    message: "Hello World!",
    total_Users: users.length,
    users: users,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
