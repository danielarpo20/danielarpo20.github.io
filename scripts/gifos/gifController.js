import { CloseMenuMobile } from "../navbar/navController.js";

export const showGifosSection = async () => {
  const gifosSection = document.querySelector(".myGifos");
  const principalSection = document.querySelector(".principal");
  const favoritesSection = document.querySelector(".favorites");
  const createSection = document.querySelector(".createGIF");
  gifosSection.style.display = "initial";
  principalSection.style.display = "none";
  favoritesSection.style.display = "none";
  createSection.style.display = "none";
  CloseMenuMobile();
};
