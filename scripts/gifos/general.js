import { inactive } from "../navbar/navbar.js";

export const gifos = async () => {
  const gifosSection = document.querySelector(".myGifos");
  const principalSection = document.querySelector(".principal");
  const favoritesSection = document.querySelector(".favorites");
  gifosSection.style.display = "initial";
  principalSection.style.display = "none";
  favoritesSection.style.display = "none";
  inactive()
};
