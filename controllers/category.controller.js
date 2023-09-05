let mongoose = require('mongoose');
const Category = require('./models/category.collection');
module.exports = {
    addCategory : async function addCategory(req,res){
        let newCategory = new Category ({
            name : req.body.name,
            image:req.body.image
        }).save()
        let categories = await Category.find();
        res.status(201);
        res.json(categories[categories.length-1])
    },
    fetchcategories: async function fetchcategories(req,res){
        let categories = await Category.find();
        res.status(200)
        res.json(categories)
    },
    fetchcategory: async function fetchcategory(req,res){
        let category = await Category.findById(req.params._id);
        res.status(200)
        res.json(category)
    },
    deletecategory: async function deletecategory(req,res){
        let category = await Category.findOneAndRemove(req.params._id);
        let categories = await Category.find();
        res.status(200)
        res.json(categories)
    }
}