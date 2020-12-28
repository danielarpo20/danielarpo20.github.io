export const active = () => {
  document.querySelector(".navbar").classList.add("active");
  document.querySelector(".header-icon").classList.add("active");
  document.querySelector(".header-iconX").classList.add("active");
};

export const inactive = () => {
  document.querySelector(".navbar").classList.remove("active");
  document.querySelector(".header-icon").classList.remove("active");
  document.querySelector(".header-iconX").classList.remove("active");
};

export const refreshPage = () => {
  const principalSection = document.querySelector(".principal");
  const gifosSection = document.querySelector(".myGifos");
  const favoritesSection = document.querySelector(".favorites");
  const createSection = document.querySelector('.createGIF')
  const trendingSection = document.querySelector('.trending')
  principalSection.style.display = "initial";
  trendingSection.style.display = "initial";
  gifosSection.style.display = "none";
  favoritesSection.style.display = "none";
  createSection.style.display = "none";
};
