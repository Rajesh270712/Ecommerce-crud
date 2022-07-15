const express = require("express");
const { fetchAllProducts, fetchSingleProduct, createProduct, deleteProduct } = require("../handle/product");

const productRouter = express.Router();


productRouter.get("/products/all",fetchAllProducts)
productRouter.get("/products/:id",fetchSingleProduct)
productRouter.post("/products" , createProduct)
productRouter.delete("/products/:id", deleteProduct)
module.exports={
    productRouter
}