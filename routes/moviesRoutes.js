const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/moviesController');

router.post('/add-movie', moviesController.createMovie);
router.get('/view-all', moviesController.allMovies);
router.get('/find-by-title/:title', moviesController.findByTitle);
router.put('/update-by-id/:id', moviesController.updateById);
router.delete('/delete-by-id/:id', moviesController.deleteById);

module.exports = router;