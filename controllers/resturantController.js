const restaurantModel = require("../models/restaurantModel");

// create resturant
const createResturantController = async (req, res) => {
    try {
        const { title, imageUR, foods, time, pickup, delivery, isOpen, logoUrl, rating, ratingCount, code, coords } = req.body;

        // validation
        if (!title || !coords) {
            return res.status(500).send({ success: false, message: 'Please provide title and address' });
        }
        const newResturant = new restaurantModel({ title, imageUR, foods, time, pickup, delivery, isOpen, logoUrl, rating, ratingCount, code, coords });
        await newResturant.save();
        res.status(201).send({
            success: true,

            message: 'New Resturant Created Successfully',
            newResturant,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: 'Error in Create Resturant API' });

    }

}

// get all resturants
const getAllResturantController = async (req, res) => {
    try {
       const resturants = await restaurantModel.find({

       });
       if (!resturants) {
        return res.status(404).send({success : false, message : 'No Resturant Available'});

       }
       res.status(200).send({success : true, totalCount : resturants.length, resturants})
    } catch (error ) {
        console.log(error);
         res.status(500).send({success :false, message : 'Error in Get All Resturant API', error});
    }

}


// get resturant by id
const getResturantByIdController = async (req, res) => {
    try {
           const resturantId = req.params.id;
          if (!resturantId) {
            return res.status(404).send({success :false , message : 'Please Provide Resturant ID'});
          }
           // find resturant
           const resturant = await restaurantModel.findById(resturantId);

           if (!resturant) {
            return res.status(404).send({success : false, message : 'Resturant not found'});
           }
           res.status(200).send({success : true, resturant});
    }catch (error ) {
        console.log(error);
        res.status(500).send({sucess : false, message : 'Error in Get Resturant by ID API', error});
    }

}

// DELETE RESTURANT
const deleteResturantController = async (req , res) => {

}

module.exports = { createResturantController , getAllResturantController ,getResturantByIdController , deleteResturantController};