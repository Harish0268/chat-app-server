const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

let messages = [];

app.get("/messages", (req, res) => {
  const { user1, user2 } = req.query;

  const filteredMessages = messages.filter(
    (msg) =>
      (msg.sender === user1 && msg.receiver === user2) ||
      (msg.sender === user2 && msg.receiver === user1)
  );

  res.json(filteredMessages);
});

app.post("/messages", (req, res) => {
  messages.push(req.body);

  res.json({
    success: true
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});