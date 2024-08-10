const express = require("express");
const fs = require("fs");
const todo = express();
todo.get("/", (request, response) => {
  response.sendFile("./index.html", { root: __dirname });
});
todo.get("/styles.css", (request, response) => {
  response.sendFile("./styles.css", {
    root: __dirname,
  });
});
todo.get("/mainIndex.js", (request, response) => {
  response.sendFile("./mainIndex.js", { root: __dirname });
});
todo.get("/data", (request, response) => {
  try {
    let stringifiedTodoList = fs.readFileSync("example.json", "utf-8");
    response.send(stringifiedTodoList);
  } catch (error) {
    response.send("null");
  }
});
todo.listen(3100);
