const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const homeRoutes = require('./homepage-route');
router.use('/', homeRoutes);

const newListRoutes = require('./newList-route');
router.use('/create-list', newListRoutes);

router.use((req, res) => {
	res.status(404).end();
});

module.exports = router;
