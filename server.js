const express = require("express");
const app = express();

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

// Exercise 1
app.get("/greetings/:username", (req, res) => {
  res.send(`Hello there, ${req.params.username}!`);
});

// Exercise 2
app.get("/roll/:number", (req, res) => {
  const num = req.params.number;

  if (isNaN(num)) {
    return res.send("You must specify a number.");
  }

  const rolledNumber = Math.floor(Math.random() * (parseInt(num) + 1));
  res.send(`You rolled a ${rolledNumber}.`);
});

// Exercise 3
app.get("/collectibles/:index", (req, res) => {
  const index = req.params.index;
  const item = collectibles[index];

  if (!item) {
    return res.send("This item is not yet in stock. Check back soon!");
  }

  res.send(
    `So, you want the ${item.name}? For ${item.price}, it can be yours!`
  );
});

// Exercise 4
app.get("/shoes", (req, res) => {
  let filteredShoes = shoes;

  const minPrice = req.query["min-price"];
  const maxPrice = req.query["max-price"];
  const type = req.query.type;

  if (minPrice) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.price >= parseFloat(minPrice)
    );
  }

  if (maxPrice) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.price <= parseFloat(maxPrice)
    );
  }

  if (type) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.type === type);
  }

  res.send(filteredShoes);
});

app.listen(3000, () => {
  console.log("Your server is running on port 3000");
});
