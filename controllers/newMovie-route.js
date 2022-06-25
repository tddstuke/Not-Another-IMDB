const router = require('express').Router();
const sequelize = require('../config/connection');
const { List, Movie, User } = require('../models');
const movieDataBase = require('../services/movie-service');

router.get('/', async (req, res) => {
	res.render('create-list');
});

router.get('/by-name:name', async (req, res) => {
	res.render;
});

module.exports = router;
