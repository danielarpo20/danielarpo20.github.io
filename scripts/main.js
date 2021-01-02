import {
  activeMenu,
  inactiveMenu,
  darkMode,
  principalPage,
} from "./navbar/mainNav.js";
import {
  nextSlide,
  previusSlideButtom,
  showCardBack,
  VanishCardBack,
  expandCard,
  closeCardExpanded,
  showExpandCardMobile
} from "./trendings/mainTrends.js";
import { getTrendings } from "./trendings/network.js";
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
  VanishCardBack();
  expandCard();
  closeCardExpanded();
  showExpandCardMobile()
}

main();
