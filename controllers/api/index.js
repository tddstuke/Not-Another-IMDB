const router = require("express").Router();

const userRoutes = require("./user-routes.js");

router.use("/users", userRoutes);
const movieRoutes = require("./movie-routes");

router.use("/movies", movieRoutes);

module.exports = router;
