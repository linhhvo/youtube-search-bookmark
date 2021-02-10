const express = require('express');
const router = express.Router();
const {getVideos} = require('../controllers/videosControl');

router.route('/:keyword').get(getVideos);

module.exports = router;