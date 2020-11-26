import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.json(data.products);
});

app.get("/", (req, res) => {
  res.json("Server is ready");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
