import express from "express";
import data from "./data.js";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find(
    (product) => product._id === req.params.id
  );
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

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
