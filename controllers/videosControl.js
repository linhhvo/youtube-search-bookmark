const {google} = require('googleapis');
const dotenv = require('dotenv');

// Get global env variable
dotenv.config({path: './config/config.env'});

exports.getVideos = async (req, res, next) => {
  try {
    const {data} = await google.youtube('v3').search.list({
      key: process.env.YOUTUBE_TOKEN,
      part: 'snippet',
      q: req.params.keyword,
      maxResults: 10,
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