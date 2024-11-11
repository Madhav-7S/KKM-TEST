import express from "express";

import connectDB from "./config/mongodb.js";
import productRouter from "./Routes/productRoute.js";

import cors from "cors";
const app = express();
const port = 4000;
connectDB();

//middlewares

app.use(express.json());
app.use(cors());

app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log("App is running on 4000");
});
