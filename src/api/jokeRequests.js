export const randomJoke = async () => {
	const response = await fetch("https://api.chucknorris.io/jokes/random")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => console.log(error));
	return response;
};

export const jokeByCategory = async (category) => {
	const response = await fetch(
		`https://api.chucknorris.io/jokes/random?category=${category}`
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => console.log(error));
	return response;
};

export const searchJokesByText = async (query) => {
	const response = await fetch(
		`https://api.chucknorris.io/jokes/search?query=${query}`
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => console.log(error));
	return response;
};
