const express = require('express');
const router = express.Router();

const moviesRouter = require('./moviesRoutes');

router.use('/movies', moviesRouter);

module.exports = router;