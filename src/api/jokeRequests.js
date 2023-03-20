export const randomJoke = async()=>{ 
	const response = await fetch("https://api.chucknorris.io/jokes/random")
		.then((response) => {
			if (!response.ok) {
				throw new Error(
					`Failed to fetch random joke. Status: ${response.status}\nDetails: ${response.statusText}`
				);
			}
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => console.log(error));
	return response;
}

export const jokeByCategory = async(category)=>{ 
	const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error(
					`Failed to fetch joke by category. Status: ${response.status}\nDetails: ${response.statusText}`
				);
			}
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => console.log(error));
	return response;
}

export const searchJokesByText = async(query)=>{ 
	const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error(
					`Failed to fetch joke by category. Status: ${response.status}\nDetails: ${response.statusText}`
				);
			}
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => console.log(error));
	return response;
}