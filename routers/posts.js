const express = require('express');
const router = express.Router();

const postsController = Require('../controllers/postsController');

//INDEX
router.get('/', postsController.index);

//Dettagli Posts
router.get('/:id', postsController.show);

//DELETE
router.delete('/:id', postsController.destroy);

module.exports = router;