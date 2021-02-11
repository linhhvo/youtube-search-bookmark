const express = require('express');
const router = express.Router();
const {getVideos, addKeyword} = require('../controllers/videosControl');

router.route('/:keyword')
  .get(getVideos);

router.route('/')
  // .get(getKeywordList)
  .post(addKeyword);

module.exports = router;