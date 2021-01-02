import {
  getCardsBack,
  vanishCardsBack,
  cardExpanded,
  closeCard,
  showCardMobile,
} from "./trendsController.js";

export function previusSlide() {
  const previusButtom = document.getElementById("previus");
  previusButtom.addEventListener("click", previusSlideButtom);
}

export function nextSlide() {
  const nextButtom = document.getElementById("next");
  nextButtom.addEventListener("click", nextSlideButtom);
}

export function showCardBack() {
  const card = document.querySelector(".trending-container-card-gifs");
  card.addEventListener("mouseover", getCardsBack);
}

export function VanishCardBack() {
  const card = document.querySelector(".trending-cardBack");
  card.addEventListener("mouseout", vanishCardsBack);
}

export function expandCard() {
  const expandIcon = document.querySelector(".fa-expand-alt");
  expandIcon.addEventListener("click", cardExpanded);
}

export function closeCardExpanded() {
  const closeIcon = document.getElementById("closeIcon");
  closeIcon.addEventListener("click", closeCard);
}

export function showExpandCardMobile() {
  const card = document.querySelector(".trending-container-card-gifs");
  card.addEventListener("click", showCardMobile);
}

export const previusSlideButtom = async () => {
  console.log("previus");
};

export const nextSlideButtom = async () => {
  console.log("next");
  console.log(card);
};
