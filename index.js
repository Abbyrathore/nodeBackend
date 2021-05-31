const express = require("express");

const app = express();

const port = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.get("/login", (req, res) => {
  return res.send("Login");
});

app.get("/signup", (req, res) => {
  return res.send("signup");
});

app.get("/logout", (req, res) => {
  return res.send("Logout");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
