import { inactive } from "../navbar/navbar.js";

export const favorites = async () => {
  const favoritesSection = document.querySelector(".favorites");
  const principalSection = document.querySelector(".principal");
  const gifosSection = document.querySelector(".myGifos");
  favoritesSection.style.display = "initial";
  principalSection.style.display = "none";
  gifosSection.style.display = "none";
  inactive();
};
