import { apiConexion } from "../apiConection.js";
import {
  showCardBack,
  vanishCardBack,
  showCardExpanded,
  closeCardExpanded,
  showCardMobile,
  goToNextSlide,
  goToPreviusSlide,
  downloadGif,
} from "./trendsController.js";

const cardBackHTML = (user = "none", title) => {
  return `<div class="trending-cardBack-iconContainer">
    <div class="trending-cardBack-iconContainer-icon">
      <i class="far fa-heart"></i>
    </div>
    <div class="trending-cardBack-iconContainer-icon">
      <i class="fas fa-arrow-to-bottom"></i>
    </div>
    <div class="trending-cardBack-iconContainer-icon">
      <i class="fas fa-expand-alt"></i>
    </div>
  </div>
  <div class="trending-cardBack-infoContainer">
    <h6 class="trending-cardBack-infoContainer-user">${user}</h6>
    <p class="trending-cardBack-infoContainer-title">${title}</p>
  </div>
`;
};

export const getTrendingsGifs = async () => {
  const results = await apiConexion("trending");
  const gifContainer = document.querySelector(".trending-container-card");
  results.data.map((result, index) => {
    let containerCardsGifs = document.createElement("div");
    containerCardsGifs.className = "trending-container-card-gifs";
    let containerCardBack = document.createElement("div");
    containerCardBack.className = "trending-cardBack";
    const gifUserName = result.username || "none";
    containerCardBack.innerHTML = cardBackHTML(gifUserName, result.title);
    containerCardBack.id = `gif${index}`;
    let gifCard = document.createElement("img");
    gifCard.src = result.images.downsized.url;
    gifCard.alt = result.title;
    gifCard.user = gifUserName;
    gifCard.gifUrl = result.images.downsized.url;
    gifCard.id = `gif${index}`;
    gifCard.style.paddingRight = "1em";
    document.activeElement.clientWidth < 1350
      ? (gifCard.style.width = "200px")
      : (gifCard.style.width = "300px");
    containerCardsGifs.appendChild(containerCardBack);
    containerCardsGifs.appendChild(gifCard);
    gifContainer.appendChild(containerCardsGifs);
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

export function gifTrendingMouseover() {
  const card = document.querySelector(".trending-container-card");
  card.addEventListener("mouseover", showCardBack);
}

export function gifTrendingMouseout() {
  const card = document.querySelector(".trending-container");
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

export function downloadIconClick() {
  const heartIcon = document.querySelector(".fa-arrow-to-bottom");
  heartIcon.addEventListener("click", downloadGif);
}
