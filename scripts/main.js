import {
  activeMenu,
  inactiveMenu,
  darkMode,
  principalPage,
} from "./navbar/mainNav.js";
import {
  getTrendings,
  nextSlide,
  previusSlideButtom,
  showCardBack,
} from "./trendings/mainTrends.js";
import { getFavorites } from "./favorites/mainFavorites.js";
import { getGifos } from "./gifos/mianGifos.js";
import { createGif } from "./createGif/mainCreate.js";

function main() {
  activeMenu();
  inactiveMenu();
  darkMode();
  getTrendings();
  nextSlide();
  previusSlideButtom();
  showCardBack();
  getFavorites();
  getGifos();
  principalPage();
  createGif();
}

main();
