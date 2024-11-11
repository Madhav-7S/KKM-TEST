import express from "express";
import productControllers from "../controllers/productControllers.js";

const { registerProduct, getProduct, deleteProduct } = productControllers;

const productRouter = express.Router();

productRouter.post("/register", registerProduct);
productRouter.get("/getProduct", getProduct);
productRouter.delete("/deleteProduct", deleteProduct);

export default productRouter;
