const restaurantModel = require("../models/restaurantModel");

// create resturant
const createResturantController = async (req, res) => {
    try {
       const {title, imageUR, foods, time, pickup, delivery, isOpen, logoUrl, rating, ratingCount, code, coords} = req.body;

       // validation
       if (!title || !coords) {
         return res.status(500).send({success : false, message : 'Please provide title and address'});
       }
       const newResturant = new restaurantModel({title, imageUR, foods, time, pickup, delivery, isOpen, logoUrl, rating, ratingCount, code, coords});
       await newResturant.save();
       res.status(201).send({
        success : true,
        message : 'Resturant Created Successfully'
       });

    } catch (error) {
        console.log(error);
         res.status(500).send({success : false, message : 'Error in Create Resturant API'});

    }

}

module.exports = {createResturantController};