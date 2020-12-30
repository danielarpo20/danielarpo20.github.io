import { getCardsBack, vanishCardsBack } from "./general.js";

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

export const previusSlideButtom = async () => {
  console.log("previus");
};

export const nextSlideButtom = async () => {
  console.log("next");
  console.log(card);
};
