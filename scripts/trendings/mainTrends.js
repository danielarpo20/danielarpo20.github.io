// import {} from './general'

export function previusSlide() {
  const previusButtom = document.getElementById("previus");
  previusButtom.addEventListener("click", previusSlideButtom);
}

export function nextSlide() {
  const nextButtom = document.getElementById("next");
  nextButtom.addEventListener("click", nextSlideButtom);
}

export function showCardBack() {
  const card = document.querySelector(".trending-gifs");
  card.addEventListener("mouseover", hover);
}

export const hover = async () => {
  const card = document.getElementById(`img${1}`);
  // card.style.color = 'tomato'
};


export const previusSlideButtom = async () => {
  console.log("previus");
};

export const nextSlideButtom = async () => {
  console.log("next");
  console.log(card);
};
