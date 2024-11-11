import productModel from "../models/productModel.js";

const registerProduct = async (req, res) => {
  try {
    const {
      id,
      productName,
      productCode,
      catagory,
      manufacturerMarketing,
      dateofManufacturing,
    } = req.body;

    if (
      !id ||
      !productName ||
      !productCode ||
      !catagory ||
      !manufacturerMarketing ||
      !dateofManufacturing
    ) {
      return res.json({ success: false, data: "Data Missing" });
    }

    const productData = {
      id,
      productName,
      productCode,
      catagory,
      manufacturerMarketing,
      dateofManufacturing,
    };

    const newproduct = new productModel(productData);
    const product = await newproduct.save();

    res.json({ success: true, id });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const productData = await productModel.findById(id);
    res.json({ success: true, productData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const deleteProduct = async (req, body) => {
  try {
    const { id } = req.body;
    await productModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Product De4leted Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error });
  }
};
export default { registerProduct, getProduct, deleteProduct };
