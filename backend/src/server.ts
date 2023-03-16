import express from "express";

const server = express();
const port = 3000;

server.get("/", (req, res) => {
  res.send("Hello!");
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default server;
