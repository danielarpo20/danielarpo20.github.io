import { CloseMenuMobile } from "./navbar/navController.js";
import { getFavoritesList } from "./favorites/favController.js";

const principalSection = document.querySelector(".principal");
const trendingsSection = document.querySelector(".trending");
const favoritesSection = document.querySelector(".favorites");
const gifosSection = document.querySelector(".myGifos");
const createSection = document.querySelector(".createGIF");
const searchSection = document.querySelector(".serchingResult");
const principalIntoContainer = document.querySelector(
  ".principal-introContainer"
);
const favorite = document.querySelector("#favorite");
const gifos = document.querySelector("#gifos");
const mygifos = document.querySelector("#mygifos");
const gifCreation = document.querySelector(".gifCreation");
const seeMoreFavoritesButton = document.querySelector("#seeMoreFavorites");
const seeMoreGifosButton = document.querySelector("#seeMoreGifos");

//Common functions
export const getCurrentTheme = () => {
  const theme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : localStorage.setItem("theme", "light");
  return theme;
};

export const activeLinksMenu = () => {
  const currentTheme = getCurrentTheme();
  gifCreation.style.background = "transparent";
  gifCreation.style.color = currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  gifCreation.style.border =
    currentTheme === "dark" ? " 1px solid #FFFFFF" : "1px solid #572EE5";
  favorite.style.color = currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  gifos.style.color = currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  mygifos.style.color = currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
};

//Show principals sections
export const showfavoritesSection = async () => {
  activeLinksMenu();
  const currentTheme = getCurrentTheme();
  favorite.style.color = "#9CAFC3";
  seeMoreFavoritesButton.style.display = "none";
  principalSection.style.display = "none";
  trendingsSection.style.display = "block";
  favoritesSection.style.display = "initial";
  gifosSection.style.display = "none";
  createSection.style.display = "none";
  searchSection.style.display = "none";
  CloseMenuMobile();
  getFavoritesList();
};

export const showGifosSection = async () => {
  activeLinksMenu();
  mygifos.style.color = "#9CAFC3";
  gifos.style.color = "#9CAFC3";
  seeMoreGifosButton.style.display = "none";
  principalSection.style.display = "none";
  trendingsSection.style.display = "block";
  favoritesSection.style.display = "none";
  gifosSection.style.display = "initial";
  createSection.style.display = "none";
  searchSection.style.display = "none";
  CloseMenuMobile();
};

export const showCreatePage = async () => {
  activeLinksMenu();
  const currentTheme = getCurrentTheme();
  gifCreation.style.background = "#9CAFC3";
  gifCreation.style.color = "#FFFFFF";
  gifCreation.style.border = currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  principalSection.style.display = "none";
  trendingsSection.style.display = "none";
  favoritesSection.style.display = "none";
  gifosSection.style.display = "none";
  createSection.style.display = "initial";
  searchSection.style.display = "none";
};

export const goPrincpalPage = () => {
  activeLinksMenu();
  principalSection.style.display = "block";
  trendingsSection.style.display = "block";
  principalIntoContainer.style.display = "inherit";
  favoritesSection.style.display = "none";
  gifosSection.style.display = "none";
  createSection.style.display = "none";
  searchSection.style.display = "none";
};
