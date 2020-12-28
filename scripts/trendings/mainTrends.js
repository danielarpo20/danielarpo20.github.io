let URL = "https://api.giphy.com/v1/gifs/";
let API_KEY = "mvnZsjTgrYJGbzvoLQkL1RpvxOh5bi63";

export const apiConexion = async (route) => {
  const request = await fetch(`${URL}${route}?api_key=${API_KEY}`);
  const result = await request.json();
  return result;
};

export const getTrendings = async () => {
  const results = await apiConexion("trending");
  const container = document.querySelector(".trending-gifs");
  results.data.map((result, index) => {
    let card = document.createElement("img");
    card.src = result.images.downsized.url;
    card.alt = result.title;
    card.style.paddingRight = "1em";
    card.id = `img${index}`;
    document.activeElement.clientWidth < 1350
      ? (card.style.width = "200px")
      : (card.style.width = "300px");
    container.appendChild(card);
  });
};

export function showCardBack() {
  const card = document.querySelector(".trending-gifs");
  card.addEventListener("mouseover", hover);
}

export const hover = async () => {
  const card = document.getElementById(`img${1}`);
  // card.style.color = 'tomato'
};

export function previusSlide() {
  const previusButtom = document.getElementById("previus");
  previusButtom.addEventListener("click", previusSlideButtom);
}

export function nextSlide() {
  const nextButtom = document.getElementById("next");
  nextButtom.addEventListener("click", nextSlideButtom);
}

export const previusSlideButtom = async () => {
  console.log("previus");
};

export const nextSlideButtom = async () => {
  console.log("next");
  console.log(card);
};
