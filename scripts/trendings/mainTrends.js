import { apiConexion } from "../apiConection.js";
import {
  showCardBack,
  vanishCardBack,
  showCardExpanded,
  closeCardExpanded,
  showCardMobile,
} from "./trendsController.js";

export const getTrendingsGifs = async () => {
  const results = await apiConexion("trending");
  const gifContainer = document.querySelector(".trending-container-card-gifs");
  results.data.map((result, index) => {
    let gifCard = document.createElement("img");
    gifCard.src = result.images.downsized.url;
    gifCard.alt = result.title;
    gifCard.user = result.username;
    gifCard.title = result.title;
    gifCard.gifUrl = result.images.downsized.url;
    gifCard.id = `gif${index}`;
    gifCard.style.paddingRight = "1em";
    document.activeElement.clientWidth < 1350
      ? (gifCard.style.width = "200px")
      : (gifCard.style.width = "300px");
    gifContainer.appendChild(gifCard);
  });
};

// export function previusButtonClick() {
//   const previusButtom = document.getElementById("previus");
//   previusButtom.addEventListener("click", goToPreviusSlide);
// }

// export function nextButtonClick() {
//   const nextButtom = document.getElementById("next");
//   nextButtom.addEventListener("click", goToNextSlide);
// }

export function gifTrendingMouseover() {
  const card = document.querySelector(".trending-container-card-gifs");
  card.addEventListener("mouseover", showCardBack);
}

export function gifTrendingMouseout() {
  const card = document.querySelector(".trending-cardBack");
  card.addEventListener("mouseout", vanishCardBack);
}

export function expandIconClick() {
  const expandIcon = document.querySelector(".fa-expand-alt");
  expandIcon.addEventListener("click", showCardExpanded);
}

export function xIconCardExpandedClick() {
  const closeIcon = document.getElementById("closeIcon");
  closeIcon.addEventListener("click", closeCardExpanded);
}

export function CardMobileClick() {
  const card = document.querySelector(".trending-container-card-gifs");
  card.addEventListener("click", showCardMobile);
}
