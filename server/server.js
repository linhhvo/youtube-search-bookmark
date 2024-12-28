const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const path = require('path');

// Get global env variable
dotenv.config({path: './config/config.env'});

// Connect database
connectDB();

// Set up routes
const videos = require('./routes/videos');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/videos', videos);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname = 'client/build/index.html'));
    });
}

const PORT = process.env.PORT || '3000';

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));