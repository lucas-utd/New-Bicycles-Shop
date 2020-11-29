import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import data from "./data.js";
import morgan from "morgan";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();

app.use(morgan("dev"));

const uri = process.env.REACT_APP_ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

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

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.json("Server is ready");
});

app.use((err, req, res) => {
  res.status(500).json({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
