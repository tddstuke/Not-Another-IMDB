const { response } = require("express");

require("dotenv").config();

async function searchButtonHandler(event) {
  event.preventDefault();

  const key = process.env.API_KEY;
  const name = document.querySelector("#search-bar").value.trim();
  query_name = name.split(" ").join("+");
  const apiUrl =
    "https://api.themoviedb.org/3/search/movie/?api_key=" +
    key +
    "&query=" +
    query_name;

  const response = await fetch(apiUrl);
  let data = await response.json();
  return data;
}

document
  .querySelector("#search-button")
  .addEventListener("submit", searchButtonHandler);
