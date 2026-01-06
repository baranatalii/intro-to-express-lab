const express = require("express");
const app = express();

app.get("/greetings/:username", (req, res) => {
  res.send(`Hello there, ${req.params.username}!`);
});



app.listen(3000, () => {
  console.log("Your server is running");
});
