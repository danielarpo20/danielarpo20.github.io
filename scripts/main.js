import { activeMenu, inactiveMenu, darkMode } from "./navbar/mainNav.js";
import {
  getTrendings,
  nextSlide,
  previusSlideButtom,
  showCardBack,
} from "./trendings/mainTrends.js";

function main() {
  activeMenu();
  inactiveMenu();
  darkMode();
  getTrendings();
  nextSlide();
  previusSlideButtom();
  showCardBack();
}

main();
