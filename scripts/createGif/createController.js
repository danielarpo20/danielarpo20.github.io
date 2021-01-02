export const showCreatePage = async () => {
  const principalSection = document.querySelector(".principal");
  const trendingsSection = document.querySelector(".trending");
  const favoritesSection = document.querySelector(".favorites");
  const gifosSection = document.querySelector(".myGifos");
  const createSection = document.querySelector(".createGIF");
  principalSection.style.display = "none";
  trendingsSection.style.display = "none";
  favoritesSection.style.display = "none";
  gifosSection.style.display = "none";
  createSection.style.display = "initial";
};
