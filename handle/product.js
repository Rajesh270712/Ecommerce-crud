const Product = require("../Database/product");

const fetchAllProducts = async (req, res) => {
    const products = await Product.find();

    return res.send({
        data: products,
    });
};

const fetchSingleProduct = async (req, res) => {
    const { id } = req.params;

    const product = await Product.find({ id: id });
    return res.send({
        data: product,
    });
};

const createProduct = async (req, res) => {
    let { product: productData } = req.body;
    const product = new Product(productData);
    await product.save();
    res.send({
        message: "product added",
        data: productData,
    });
};

const deleteProduct = async (req, res) => { 
    const {id}= req.params;

   await Product.findByIdAndDelete(id)

    res.send({
        message: "deleted"
    })

 };
module.exports = {
    fetchAllProducts,
    fetchSingleProduct,
    createProduct,
    deleteProduct
};
