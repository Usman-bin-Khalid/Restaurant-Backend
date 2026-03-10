const mongoose = require('mongoose');
const colors = require('colors');
//function mongodb connection database
 const connectDB = async () => {
    try { 
         await mongoose.connect(process.env.MONGO_URL)
         console.log(`MongoDB Connected, ${mongoose.connection.host}`.bgCyan);

    } catch (error ) {
        console.log('DB Error: ', error);
    }
}



module.exports = { connectDB };