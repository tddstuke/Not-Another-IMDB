async function searchButtonHandler(event) {
  event.preventDefault();
  //   console.log("click");
  const name = document.querySelector("#search-bar").value.trim();
  document.location.replace("/by-name" + name);
}

async function addMovie(event) {
  event.preventDefault();

  const title = document.querySelector("p").innerHTML;
  const header = document.querySelector("header");
  const overview = document.querySelector("#overview").textContent;
  const img = document.querySelector("#poster");
  const poster_pathUrl = img.getAttribute("src");
  const poster_path =
    poster_pathUrl.split("/")[poster_pathUrl.split("/").length - 1];
  movie_id = header.getAttribute("id");

  console.log(poster_path);

  const response = await fetch("api/movies", {
    method: "POST",
    body: JSON.stringify({
      movie_id,
      title,
      overview,
      poster_path,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("This movie may already exist in your movie list");
  }
}

// async function addMovie(event) {
//   event.preventDefault();
//   const title = document.querySelector("p").innerHTML;
//   const header = document.querySelector("header");
//   movie_id = header.getAttribute("id");

//   const response = await fetch("/api/movies/likes", {
//     method: "PUT",
//     body: JSON.stringify({
//       movie_id,
//       title,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (response.ok) {
//     document.location.reload();
//   } else {
//     alert(response.statusText);
//   }
// }

document
  .querySelector("#search-button")
  .addEventListener("click", searchButtonHandler);

document
  .querySelector("#add-movie")
  .addEventListener("click", (event) => addMovie(event));
