const { response } = require("express");
const categoryModel = require("../models/categoryModel");



// CREATE CATEGORY

const createCatController = async (req, res) => {
    try {
       const {title, imageUrl} = req.body;
       // validation
       if (!title ) {
        return res.status(500).send({success : false, message : 'Please provide title'});
       }
       const newCategory = new categoryModel({title, imageUrl});
       await newCategory.save();
       res.status(201).send({success : true, message : 'New Category Created Successfully', newCategory});
    } catch (error) {
        console.log(error);
        res.status(500).send({success : false, message : 'Error in Create Category API', error});
    }
}

// GET ALL CATEGORIES
const getAllCatController = async (req , res) => {
    try {
       const categories = await categoryModel.find({});
       if (!categories) {
        return res.status(404).send({success : false, message : 'No Category Available'});
       }
       res.status(200).send({success : true, totalCount: categories.length, categories});
    } catch (error ) {
        console.log(error);
        res.status(500).send({success : false, message : 'Error in Get All Category API' , error});
    }
}


module.exports = {createCatController , getAllCatController};