import { favorites } from "./general.js";

export function getFavorites() {
  let favoritesLink = document.getElementById("favorite");
  favoritesLink.addEventListener("click", favorites);
}
