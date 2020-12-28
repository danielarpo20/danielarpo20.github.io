let URL = "https://api.giphy.com/v1/gifs/";
let API_KEY = "mvnZsjTgrYJGbzvoLQkL1RpvxOh5bi63";

export const apiConexion = async (route) => {
  const request = await fetch(`${URL}${route}?api_key=${API_KEY}`);
  const result = await request.json();
  return result;
};