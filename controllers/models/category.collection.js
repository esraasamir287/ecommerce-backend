let mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name :{
        type : String,
        require : true,
    },
    image : String
})
module.exports = mongoose.model('category',categorySchema)