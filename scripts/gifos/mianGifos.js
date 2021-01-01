import { gifos } from "./gifController.js";

export function getGifos() {
  const favoritesLink = document.getElementById("gifos");
  favoritesLink.addEventListener("click", gifos);
}
