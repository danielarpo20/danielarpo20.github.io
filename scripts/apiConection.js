let URL = "https://api.giphy.com/v1/gifs/";
let API_KEY = "KtcCCsciSR6uQn0phdwQ8e4TEJseoOsR";

export const apiConexion = async (route) => {
  const request = await fetch(`${URL}${route}?api_key=${API_KEY}`);
  const result = await request.json();
  return result;
};
