import { inactive } from "../navbar/navbar.js";

export const favorites = async () => {
  const favoritesSection = document.querySelector(".favorites");
  const principalSection = document.querySelector(".principal");
  const gifosSection = document.querySelector(".myGifos");
  const createSection = document.querySelector(".createGIF");
  const buttomSeeMore = document.querySelector(".button");
  const galeryContainer = document.querySelector(".gifGalery-container");
  favoritesSection.style.display = "initial";
  principalSection.style.display = "none";
  gifosSection.style.display = "none";
  createSection.style.display = "none";
  buttomSeeMore.style.display = "none";
  galeryContainer.style.display = "none";
  inactive();
};
