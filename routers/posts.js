const express = require('express');
const router = express.Router();

const postsController = require('../controllers/postsController');

//INDEX
router.get('/', postsController.index);

//Dettagli Posts
router.get('/:id', postsController.show);

module.exports = router;