import { showfavoritesSection } from "../helper.js";

const heartIcon = document.querySelector(".fa-heart");
const storedFavorites = localStorage.getItem("favoritesList");
const galeryNoContent = document.querySelector(".gifGalery-noContent");
const gifGaleryContainer = document.querySelector(".gifGalery-container");

export const addToFavorites = async (event) => {
  let url;
  if (event.target.offsetParent.nextElementSibling) {
    url = event.target.offsetParent.nextElementSibling.currentSrc;
  }
  if (event.target.offsetParent.childNodes[3].firstElementChild.currentSrc) {
    url = event.target.offsetParent.childNodes[3].firstElementChild.currentSrc;
  }
  console.log(event);

  heartIcon.className = "fas fa-heart";

  const favorite = {};
  favorite.favoriteList = [];
  const favoritesInformation = {
    user: event.target.offsetParent.lastElementChild.children[0].innerText,
    title: event.target.offsetParent.lastElementChild.children[1].innerText,
    src: url,
  };
  favorite.favoriteList.push(favoritesInformation);
  localStorage.setItem("favoritesList", JSON.stringify(favorite));
  showfavoritesSection();
};

export const getFavoritesList = async () => {
  // Get info from local storage
  // let storedFavorites = true
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
