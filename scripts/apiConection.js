let URL = "https://api.giphy.com/v1/gifs/";
let API_KEY = "5PfyzVIh2rOwMLGaDIQ2jjgM3y12913G";

export const apiConection = async (route, param, limit, offset) => {
  let request = await fetch(
    `${URL}${route}?api_key=${API_KEY}&q=${param}&limit=${limit}&offset=${offset}`
  );
  const result = await request.json();
  return result;
};
