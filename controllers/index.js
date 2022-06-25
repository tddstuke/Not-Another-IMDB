const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const homeRoutes = require('./homepage-route');
router.use('/', homeRoutes);

// const newMovieRoutes = require('./newMovie-route');
// router.use('/newMovie-route');

router.use((req, res) => {
	res.status(404).end();
});

module.exports = router;
