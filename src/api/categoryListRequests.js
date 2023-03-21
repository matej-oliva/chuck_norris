export const categoryListRequest = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/categories')
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to fetch random joke. Status: ${response.status}\nDetails: ${response.statusText}`,
        );
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
  return response;
};
