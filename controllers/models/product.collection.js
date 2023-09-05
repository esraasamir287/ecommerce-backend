let mongoose = require('mongoose');
let productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    desc : String,
    img:String,
    price:Number
})
module.exports = mongoose.model('product',productSchema)