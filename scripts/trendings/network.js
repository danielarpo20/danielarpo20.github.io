import { apiConexion } from "../apiConection.js";

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
