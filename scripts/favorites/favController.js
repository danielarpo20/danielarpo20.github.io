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

  const getInfoLocal = true;
  if (getInfoLocal) {
    const galeryNoContent = document.querySelector(".gifGalery-noContent");
    const gifGaleryContainer = document.querySelector(".gifGalery-container");
    galeryNoContent.style.display = "none";
    gifGaleryContainer.style.display = "grid";
    let card = document.createElement("img");
    card.src = localStorage.getItem("gif");
    card.style.width = "100%";
    if (document.body.clientWidth < 1350) {
      card.style.height = "10em";
    } else {
      card.style.height = "15em";
    }
    card.style.marginBottom = "2em";
    gifGaleryContainer.appendChild(card);
  }
};

export const favoritesList = async () => {
  const heartIcon = document.querySelector(".fa-heart");
  heartIcon.className = "fas fa-heart";
  const favoriteList = [];
  const favoritesInformation = {
    id: localStorage.getItem("idGif"),
    user: localStorage.getItem("userGif"),
    title: localStorage.getItem("titleGif"),
    src: localStorage.getItem("gif"),
  };
  favoriteList.push(favoritesInformation);
  localStorage.setItem("favoritesList", favoritesInformation);
  favorites();
};
