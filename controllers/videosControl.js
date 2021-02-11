const {google} = require('googleapis');
const dotenv = require('dotenv');
const Keyword = require('../models/Keyword');

// Get global env variable
dotenv.config({path: './config/config.env'});

// Get videos from Youtube API
exports.getVideos = async (req, res, next) => {
  try {
    const {data} = await google.youtube('v3').search.list({
      key: process.env.YOUTUBE_TOKEN,
      part: 'snippet',
      q: req.params.keyword,
      maxResults: 6,
      order: 'viewCount',
      type: 'video'
    });

    if (data.items.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'No video found'
      });
    }
    // Get video IDs from the response data
    const videoIds = data.items.map(video => video.id.videoId);

    return res.status(200).json({
      success: true,
      data: videoIds
    });

  } catch (error) {
    return res.status(500).json({
      sucess: false,
      error: 'Server Error'
    });
  }
};

// Save keyword to the database
exports.addKeyword = async (req, res, next) => {
  try {
    const existingKeyword = await Keyword.find(req.body);

    if (existingKeyword.length !== 0) {
      return res.status(404).json({
        success: false,
        message: 'This keyword is already on the list.'
      });
    }

    const keyword = await Keyword.create(req.body);

    return res.status(201).json({
      success: true,
      data: keyword,
      message: 'Keyword saved!'
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(value => value.message);

      return res.status(400).json({
        success: false,
        message: messages
      });

    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};