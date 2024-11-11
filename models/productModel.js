import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  Id: { type: String, required: true },
  productName: { type: String, required: true },
  productCode: { type: String, required: true },
  catagory: { type: String, required: true },
  manufacturer: { type: String, required: true },
  marketing: { type: String, required: true },
  dateofManufacturing: { type: Number, required: true },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
