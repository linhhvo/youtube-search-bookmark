const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

// Get global env variable
dotenv.config({path: './config/config.env'});

// Connect database
connectDB();

// Set up routes
const videos = require('./routes/videos');

const app = express();

app.use(express.json());

app.use('/', videos);
const PORT = process.env.PORT || '5000';

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));