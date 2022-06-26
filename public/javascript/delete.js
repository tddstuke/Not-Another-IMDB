async function deleteButtonHandler(event) {
  event.preventDefault();
  movie_id = event.target.getAttribute("id");
  console.log(movie_id);
  if (!movie_id || movie_id === null) {
    return;
  }
  const response = await fetch(`/api/movies/${movie_id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

const btns = document.querySelectorAll("button");
btns.forEach((currentBtn) => {
  currentBtn.addEventListener("click", deleteButtonHandler);
});
// document
//   .querySelectorAll("button")
//   .addEventListener("click", deleteButtonHandler);
