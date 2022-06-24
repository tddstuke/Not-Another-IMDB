// require("dotenv").config();
const pageDiv = document.querySelector("#container");

async function searchButtonHandler(event) {
  event.preventDefault();
  console.log("click");

  //   const key = process.env.API_KEY;
  const key = "08389134f27bb5c7051579d94ad25dbd";
  const name = document.querySelector("#search-bar").value.trim();
  query_name = name.split(" ").join("+");
  const apiUrl =
    "https://api.themoviedb.org/3/search/movie/?api_key=" +
    key +
    "&query=" +
    query_name;

  const response = await fetch(apiUrl);
  let data = await response.json();
  const movie_info = data.results[0];
  console.log(movie_info);

  createMovieCard(movie_info);
}

function createMovieCard(movie_info) {
  const { id, overview, release_date, title } = movie_info;
  const movie_id = id;
  console.log(movie_id, overview, release_date, title);

  const movieDiv = document.createElement("div");
  const titleHeader = document.createElement("header");
  const titleText = document.createElement("p");
  const contentContainerDiv = document.createElement("div");
  const contentDiv = document.createElement("div");
  const infoList = document.createElement("ul");
  const overviewLi = document.createElement("li");
  const release_dateLi = document.createElement("li");

  movieDiv.classList = "card";
  titleHeader.classList = "card-header";
  titleText.classList = "card-header-title";
  contentContainerDiv.classList = "card-content";
  contentDiv.classList = "content";

  titleText.textContent = title;
  overviewLi.textContent = overview;
  release_dateLi.textContent = "Released: " + release_date;

  pageDiv.appendChild(movieDiv);
  movieDiv.appendChild(titleHeader);
  titleHeader.appendChild(titleText);
  pageDiv.appendChild(contentContainerDiv);
  contentContainerDiv.appendChild(contentDiv);
  contentDiv.appendChild(infoList);
  infoList.append(overviewLi, release_dateLi);
}

document
  .querySelector("#search-button")
  .addEventListener("click", searchButtonHandler);
