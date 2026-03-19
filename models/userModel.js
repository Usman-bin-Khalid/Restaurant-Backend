const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Username is required field'],

    },

    email: {
        type: String,
        required: [true, 'Email is required field'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required field'],
    },
    address: { type: Array },
    phone: { type: String, required: [true, 'Phone number is required field'] },
    userType: {
        type: String, required: [true, 'User type is required field'],
        default: 'client',
        enum: ['client', 'admin', 'vendor', 'driver'],
    },
    answer: { type: String, required: [true, 'Answer is required field'] },
    profile: { type: String, default: 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_rp_50_assets&w=740&q=80' },
}, { timestamps: true });






// export
module.exports = mongoose.model('User', userSchema)