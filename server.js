const express = require('express');
let app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
const mongoose =  require('mongoose'); 
let categoryController = require('./controllers/category.controller')
let productController = require('./controllers/product.controller')
let userController = require('./controllers/user.controller');
app.use(bodyParser.json());
app.use(cors());
async function connectDB (){
    mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
}

console.log(connectDB());
app.post('/category',categoryController.addCategory)
app.get('/category',categoryController.fetchcategories)
app.get('/category/:_id',categoryController.fetchcategory)
app.delete('/category/:_id',categoryController.deletecategory)
app.post('/product',productController.addProduct)
app.get('/product',productController.fetchProducts)
app.get('/product/:_id',productController.fetchProduct)
app.delete('/product/:_id',productController.deleteProduct)
app.post('/signup',userController.signup)
app.post('/login',userController.login)
app.listen(8080,()=>{console.log('now I ready')})