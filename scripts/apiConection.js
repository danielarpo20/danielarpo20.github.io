let URL = "https://api.giphy.com/v1/gifs/";
let API_KEY = "YT7jyQD9w7OGA09QCwTZOYwLSK3spvsJ";

export const apiConexion = async (route, param = null) => {
  let request;
  param
    ? (request = await fetch(`${URL}${route}?api_key=${API_KEY}&q=${param}`))
    : (request = await fetch(`${URL}${route}?api_key=${API_KEY}`));
  const result = await request.json();
  return result;
};
