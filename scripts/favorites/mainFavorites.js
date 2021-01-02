import { favorites, favoritesList } from "./favController.js";

export function getFavorites() {
  const favoritesLink = document.getElementById("favorite");
  favoritesLink.addEventListener("click", favorites);
}

export function addToFavorites() {
  const favoritesIcon = document.querySelector(".fa-heart");
  favoritesIcon.addEventListener("click", favoritesList);
}
