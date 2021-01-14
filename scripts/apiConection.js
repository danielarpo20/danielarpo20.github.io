let URL = "https://api.giphy.com/v1/gifs/";
let URL_UPLOAD = "https://upload.giphy.com/v1/gifs";
let URL_GETBYID = "https://media.giphy.com/media/";
let API_KEY = "TIZM63L4hut9aJU3L5AxsHGg9myW3A9G";

export const apiConection = async (route, param, limit, offset) => {
  try {
    let request = await fetch(
      `${URL}${route}?api_key=${API_KEY}&q=${param}&limit=${limit}&offset=${offset}`
    );
    const result = await request.json();
    return result;
  } catch (error) {}
};

export const uploadTogiphy = async (parameters) => {
  try {
    let request = await fetch(
      `${URL_UPLOAD}?api_key=${API_KEY}&tags=MiGuifo`,
      parameters
    );
    let requestJson = await request.json();
    console.log(requestJson);
    return requestJson;
  } catch (error) {}
};

export const getBlobById = async (param) => {
  try {
    let request = await fetch(`${URL_GETBYID}${param}/giphy.gif`);
    let blobResult = await request.blob();
    return blobResult;
  } catch (error) {}
};

export const getGifById = async (id) => {
  try {
    let request = await fetch(`${URL}${id}?api_key=${API_KEY}`);
    let requestJson = await request.json();
    return requestJson;
  } catch (error) {}
};
