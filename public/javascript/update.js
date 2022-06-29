function tagFormHandler(event) {
  const tagArray = document.getElementsByName("tag");

  tagArray.forEach((tag) => {
    if (tag.checked) {
      //   console.log(tag.value);
      //   console.log(movie_id);
      tag = tag.value;
      console.log(tag);
      updateMovie(tag);
    }
  });
}

async function updateMovie(tag) {
  const header = document.querySelector(".card-header");
  const movie_id = header.getAttribute("id");
  const response = await fetch(`api/movies/${movie_id}`, {
    method: "PUT",
    body: JSON.stringify({
      movie_id,
      tag: tag,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    console.log(response);
    alert(response.statusText);
  }
}

document.querySelector("#add-tag").addEventListener("click", tagFormHandler);
