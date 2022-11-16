const Category = require('../models/category.model')
  
module.exports = categoryController = ({
     
    addCategory: (req, res) => {
        Category.create({
            name:req.body.name
        }).then((data)=>{
            res.json(data)
        })
    },
    updateCategory: (req, res) => {
        Category.findByIdAndUpdate(req.params.id, {
            name: req.body.name
        }, { new: true }).then((a) => {
            res.json(a)
        })
    },
    deleteCategory: async (req, res) => {
       await Category.findByIdAndDelete(req,res) 
        res.json('Category deleted succesfully')
        
    },
    getCategory: (req,res) => {
        Category.find().then((a)=>{
            res.json(a)
        })
    }



})