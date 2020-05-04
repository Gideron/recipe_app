'use strict';

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/', commentController.getAllComments);

router.get('/:id', commentController.getComment);

router.post('/', commentController.postComment);

module.exports = router;