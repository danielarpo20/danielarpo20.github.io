import { CloseMenuMobile } from "../navbar/navController.js";

export const showfavoritesSection = async () => {
  const favoritesSection = document.querySelector(".favorites");
  const principalSection = document.querySelector(".principal");
  const gifosSection = document.querySelector(".myGifos");
  const createSection = document.querySelector(".createGIF");
  const buttomSeeMore = document.querySelector(".button");
  const galeryContainer = document.querySelector(".gifGalery-container");
  principalSection.style.display = "none";
  gifosSection.style.display = "none";
  createSection.style.display = "none";
  buttomSeeMore.style.display = "none";
  galeryContainer.style.display = "none";
  favoritesSection.style.display = "initial";
  CloseMenuMobile();
  getFavoritesList();
};

export const addToFavorites = async () => {
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

const getFavoritesList = async () => {
  // Get info from local storage
  // const storedFavorites = localStorage.getItem('')
  const galeryNoContent = document.querySelector(".gifGalery-noContent");
  const gifGaleryContainer = document.querySelector(".gifGalery-container");
  if (storedFavorites) {
    galeryNoContent.style.display = "none";
    gifGaleryContainer.style.display = "grid";
    let card = document.createElement("img");
    card.src = localStorage.getItem("gif");
    card.style.width = "100%";
    document.body.clientWidth < 1350
      ? (card.style.height = "10em")
      : (card.style.height = "15em");
    card.style.marginBottom = "2em";
    gifGaleryContainer.appendChild(card);
  }
};
