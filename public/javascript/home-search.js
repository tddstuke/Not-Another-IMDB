// const SingleMovie = require("../../utils/SingleMovie");

// require("dotenv").config();
const pageDiv = document.querySelector("#container");

async function searchButtonHandler(event) {
  event.preventDefault();
  //   console.log("click");
  const name = document.querySelector("#search-bar").value.trim();

  const response = await fetch(`/by-name:${name}`);

  let data = await response.json();
  console.log(data);
  const movie_info = data;
  console.log(movie_info.id);

  createMovieCard(movie_info);
}

function createMovieCard(movie_info) {
  const { id, overview, release_date, title, poster_path } = movie_info;
  //   const movie = new SingleMovie(poster_path, title, overview, id, release_date);

  const movie_id = id;
  console.log(movie_id, overview, release_date, poster_path);

  const movieDiv = document.createElement("div");
  const titleHeader = document.createElement("header");
  const titleText = document.createElement("p");
  const contentContainerDiv = document.createElement("div");
  const contentDiv = document.createElement("div");
  const infoList = document.createElement("ul");
  const overviewLi = document.createElement("li");
  const release_dateLi = document.createElement("li");
  const poster = document.createElement("img");
  const button = document.createElement("button");

  movieDiv.classList = "card";
  titleHeader.classList = "card-header";
  titleText.classList = "card-header-title";
  contentContainerDiv.classList = "card-content";
  contentDiv.classList = "content";
  poster.setAttribute("src", "http://image.tmdb.org/t/p/w500/" + poster_path);
  button.classList = "button is-warning mt-3";
  button.textContent = "Add Movie";
  button.setAttribute("id", "add-movie");

  titleText.textContent = title;
  overviewLi.textContent = overview;
  release_dateLi.textContent = "Released: " + release_date;

  pageDiv.appendChild(movieDiv);
  movieDiv.append(poster, titleHeader);
  titleHeader.appendChild(titleText);
  pageDiv.appendChild(contentContainerDiv);
  contentContainerDiv.appendChild(contentDiv);
  contentDiv.appendChild(infoList);
  infoList.append(overviewLi, release_dateLi, button);

  document
    .querySelector("#add-movie")
    .addEventListener("click", (event) => addMovie(event, movie_info));
}

async function addMovie(event, movie_info) {
  event.preventDefault();
  //   event.preventDefault();
  //   const list_id = 1;
  const title = movie_info.title;
  const movie_id = movie_info.id;

  console.log(movie_id);
  const response = await fetch("api/movies", {
    method: "POST",
    body: JSON.stringify({
      //   list_id,
      movie_id,
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#search-button")
  .addEventListener("click", searchButtonHandler);
