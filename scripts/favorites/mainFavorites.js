import { addToFavorites } from "./favController.js";

export function heartIconClick() {
  const heartIcon = document.querySelectorAll(".fa-heart");
  for (let iconHeart of heartIcon) {
    iconHeart.addEventListener("click", addToFavorites);
  }
}
