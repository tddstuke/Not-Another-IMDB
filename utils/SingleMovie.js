class SingleMovie {
  constructor(
    movie_id = "",
    title = "",
    poster_path = "",
    overview = "",
    release_date = ""
  ) {
    this.id = movie_id;
    this.title = title;
    this.poster_path = "http://image.tmdb.org/t/p/w500" + poster_path;
    this.overview = overview;
    this.release_date = release_date;
  }
}

module.exports = SingleMovie;
