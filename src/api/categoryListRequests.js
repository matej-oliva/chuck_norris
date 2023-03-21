export const categoryListRequest = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/categories')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
  return response;
};
