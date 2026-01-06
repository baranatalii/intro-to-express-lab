const express = require("express");
const app = express();

app.get("/greetings/:username", (req, res) => {
  res.send(`Hello there, ${req.params.username}!`);
});

app.get("/roll/:number", (req, res) => {
  const max = req.params.number;

  if (isNaN(max)) {
    return res.send("You must specify a number.");
  }

  const rolledNumber = Math.floor(Math.random() * (parseInt(max) + 1));
  res.send(`You rolled a ${rolledNumber}.`);
});

app.listen(3000, () => {
  console.log("Your server is running");
});
