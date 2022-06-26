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
  movie_id = header.getAttribute("id");

  console.log(title, movie_id);

  const response = await fetch("api/movies", {
    method: "POST",
    body: JSON.stringify({
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
    alert("This movie may already exist in your movie list");
  }
}

document
  .querySelector("#search-button")
  .addEventListener("click", searchButtonHandler);

document
  .querySelector("#add-movie")
  .addEventListener("click", (event) => addMovie(event));
