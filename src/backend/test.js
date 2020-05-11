async function run(character) {
	let response = await fetch(
		`https://challenges.hackajob.co/swapi/api/people/?search=${character}`
	);
	let moviesArray = await response.json();
	console.log(moviesArray)
    return moviesArray.films.length;
    }
console.log(run("Luke Skywalker"))