const axios = require("axios");
require("dotenv").config();
const apiUrl = "https://api.themoviedb.org/3/search/movie/?api_key=";
const byIdUrl = "https://api.themoviedb.org/3/movie/";

const key = process.env.API_KEY;

module.exports = {
  fetchByName(movieName) {
    const query_name = movieName.split(" ").join("+");
    return axios.get(`${apiUrl}${key}&query=${query_name}`);
  },
<<<<<<< HEAD
  fetchById(movieId) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`);
=======

  FetchByID(movieId) {
    const id = movieId;
    return axios.get(`${byIdUrl}${id}?api_key=${key}`);
>>>>>>> ca280d0fe9d5f57e56bf9ffb6f16261f1b481d1c
  },
};
