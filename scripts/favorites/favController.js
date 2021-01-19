import { showfavoritesSection } from "../helper.js";
import { downloadIconClick, expandIconClick } from "../trendings/mainTrends.js";
import { heartIconClick } from "../favorites/mainFavorites.js";

const cardBackGifos = document.querySelector(".cardBack");
const galeryNoContent = document.querySelector(
  ".favorites-gifGalery-noContent"
);
const gifGaleryContainer = document.querySelector(
  ".favorites-gifGalery-container"
);
const cardBackGifosUser = document.querySelector(
  ".cardBack-infoContainer-user"
);
const cardBackGifosTitle = document.querySelector(
  ".cardBack-infoContainer-title"
);
const gifWrapper = document.querySelector(
  ".favorites-gifGalery-container-searchWrapper"
);

export const addToFavorites = async (event) => {
  let url;
  if (event.target.offsetParent.nextElementSibling) {
    url = event.target.offsetParent.nextElementSibling.currentSrc;
  }
  if (event.target.offsetParent.childNodes[3].firstElementChild.currentSrc) {
    url = event.target.offsetParent.childNodes[3].firstElementChild.currentSrc;
  }
  event.target.className = "fas fa-heart";
  let favoriteList = JSON.parse(localStorage.getItem("favoritesList")) || [];
  const favoritesInformation = {
    user: event.target.offsetParent.lastElementChild.children[0].innerText,
    title: event.target.offsetParent.lastElementChild.children[1].innerText,
    src: url,
  };
  favoriteList.push(favoritesInformation);
  localStorage.setItem("favoritesList", JSON.stringify(favoriteList));
  showfavoritesSection();
};

export const showFavoritesGalery = async () => {
  let favLocal = JSON.parse(localStorage.getItem("favoritesList")) || [];
  if (favLocal.length) {
    gifGaleryContainer.innerHTML = "";
    galeryNoContent.style.display = "none";
    gifGaleryContainer.style.display = "grid";
    favLocal.map((fav) => {
      cardBackGifosUser.innerText = fav.user;
      cardBackGifosTitle.innerText = fav.title;
      let gifWrapperClone = gifWrapper.cloneNode(true);
      let cardBackGifosClone = cardBackGifos.cloneNode(true);
      cardBackGifosClone.childNodes[1].firstElementChild.firstElementChild.className =
        "fas fa-heart";
      let card = document.createElement("img");
      card.src = fav.src;
      card.alt = "favorites gifs";
      card.user = "";
      card.style.width = "100%";
      card.style.height = "100%";
      gifWrapperClone.appendChild(cardBackGifosClone);
      gifWrapperClone.appendChild(card);
      gifGaleryContainer.appendChild(gifWrapperClone);
    });
  }
  await downloadIconClick();
  await expandIconClick();
  await heartIconClick();
};
