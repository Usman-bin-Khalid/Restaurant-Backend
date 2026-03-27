const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');

// config env
dotenv.config();

// DB Connection
connectDB();

// rest Object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// route
// URL http://localhost:8080
app.use('/api/v1/test', require('./routes/testRoutes'));
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/resturant', require('./routes/resturantRoutes'));
app.get('/', (req, res) => {
  return res.status(200).send('</h1> Welcome to Food Server App </h1>');
});

PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`Node Server is running on port : ${PORT}`.white.bgMagenta);
});




