import { showfavoritesSection, addToFavorites } from "./favController.js";

export function favoritesLinkClick() {
  const favoritesLink = document.getElementById("favorite");
  favoritesLink.addEventListener("click", showfavoritesSection);
}

export function heartIconClick() {
  const heartIcon = document.querySelector(".fa-heart");
  heartIcon.addEventListener("click", addToFavorites);
}
