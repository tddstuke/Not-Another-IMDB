const Movie = require("./Movie");

// User.hasmany(Movie, {
//   foreignKey: "user_id",
// });

// User.belongsToMany(Movie, {
//   through: Favorite,
//   as: "liked_movie",
//   foreignKey: "user_id",
// });

// Movie.belongsToMany(User, {
//   through: Favorite,
//   as: "liked_movie",
//   foreignKey: "movie_id",
// });

// Favorite.belongsTo(User, {
//   foreignKey: "user_id",
// });

// Favorite.belongsTo(Movie, {
//   foreignKey: "movie_id",
// });

// User.hasmany(Favorite, {
//   foreignKey: "user_id",
// });

module.exports = { Movie };
