import { addToFavorites } from "./favController.js";

export function heartIconClick() {
  const heartIcon = document.querySelector(".fa-heart");
  heartIcon.addEventListener("click", addToFavorites);
}
