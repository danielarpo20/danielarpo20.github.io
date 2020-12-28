import { gifos } from "./general.js";

export function getGifos() {
  let favoritesLink = document.getElementById("gifos");
  favoritesLink.addEventListener("click", gifos);
}
