let mongoose =require('mongoose');
const Product = require('./models/product.collection');
module.exports = {
    addProduct : async function addProduct(req,res){
        newProduct = new Product({
            name :req.body.name,
            desc:req.body.desc,
            img:req.body.img,
            price:req.body.price
        }).save()
        let products = await Product.find();
        res.status(201);
        res.json(products[products.length-1])
    },
    fetchProducts: async function fetchProducts(req,res){
        let products = await Product.find();
        res.status(200)
        res.json(products)
    },
    fetchProduct: async function fetchProduct(req,res){
        let product = await Product.findById(req.params._id);
        res.status(200)
        res.json(product)
    },
    deleteProduct: async function deleteProduct(req,res){
        let product = await Product.findOneAndRemove(req.params._id);
        let products = await Product.find();
        res.status(200)
        res.json(products)
    }
}