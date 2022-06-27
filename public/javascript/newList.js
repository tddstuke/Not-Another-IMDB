async function addMovie(event, movie_info) {
	event.preventDefault();
	//   event.preventDefault();
	//   const list_id = 1;
	const title = movie_info.title;
	const movie_id = movie_info.id;

	console.log(movie_id);
	const response = await fetch('controller/api/list', {
		method: 'POST',
		body: JSON.stringify({
			//   list_id,
			movie_id,
			title,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert(response.statusText);
	}
}

document.querySelector('#watch-button').addEventListener('click', addMovie);
