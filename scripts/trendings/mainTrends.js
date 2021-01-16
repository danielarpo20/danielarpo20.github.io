import { apiConection } from "../apiConection.js";
import {
  showCardExpanded,
  closeCardExpanded,
  showCardMobile,
  goToNextSlide,
  goToPreviusSlide,
} from "./trendsController.js";
import { downloadGif } from "../createGif/createController.js";

const gifContainer = document.querySelector(".trending-container-card");
const gifWrapper = document.querySelector(".trending-container-card-gifs");
const cardBack = document.querySelector(".cardBack");
const cardBackUser = document.querySelector(".cardBack-infoContainer-user");
const cardBackTitle = document.querySelector(".cardBack-infoContainer-title");

export const getTrendingsGifs = async () => {
  const results = await apiConection("trending");
  gifContainer.removeChild(gifContainer.childNodes[1])
  results.data.map((result, index) => {
    cardBackUser.innerText = result.username || "none";
    cardBackTitle.innerText = result.title;
    let wrapperClone = gifWrapper.cloneNode(true);
    let cardBackClone = cardBack.cloneNode(true);
    let gifCard = document.createElement("img");
    gifCard.src = result.images.downsized.url;
    gifCard.alt = result.title;
    gifCard.user = result.username || "none";
    gifCard.gifUrl = result.images.downsized.url;
    gifCard.id = `gif${index}`;
    document.activeElement.clientWidth < 1350
      ? (gifCard.style.width = "200px")
      : (gifCard.style.width = "300px");
    wrapperClone.appendChild(cardBackClone);
    wrapperClone.appendChild(gifCard);
    gifContainer.appendChild(wrapperClone);
  });
};

export function previusButtonClick() {
  const previusButtom = document.getElementById("previus");
  previusButtom.addEventListener("click", goToPreviusSlide);
}

export function nextButtonClick() {
  const nextButtom = document.getElementById("next");
  nextButtom.addEventListener("click", goToNextSlide);
}

export function expandIconClick() {
  const expandIcon = document.querySelectorAll(".fa-expand-alt");
  for (let iconExp of expandIcon) {
    iconExp.addEventListener("click", showCardExpanded);
  }
}

export function xIconCardExpandedClick() {
  const closeIcon = document.getElementById("closeIcon");
  closeIcon.addEventListener("click", closeCardExpanded);
}

export function CardMobileClick() {
  const card = document.querySelector(".trending-container-card-gifs");
  card.addEventListener("click", showCardMobile);
}

export function downloadIconClick() {
  const heartIcon = document.querySelectorAll(".fa-arrow-to-bottom");
  for (let iconDown of heartIcon) {
    iconDown.addEventListener("click", downloadGif);
  }
}
