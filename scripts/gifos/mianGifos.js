export function getGifos() {
  let favoritesLink = document.getElementById("gifos");
  favoritesLink.addEventListener("click", gifos);
}

export const gifos = async () => {
  const gifosSection = document.querySelector(".myGifos");
  const principalSection = document.querySelector(".principal");
  const favoritesSection = document.querySelector('.favorites')
  gifosSection.style.display = "initial";
  principalSection.style.display = "none";
  favoritesSection.style.display = 'none'
};
