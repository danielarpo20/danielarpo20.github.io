import {
  nemuIconClick,
  xIconClick,
  imageClick,
  changeModeClick,
} from "./navbar/mainNav.js";

import {
  getTrendingsGifs,
  // previusButtonClick,
  // nextSlide,
  gifTrendingMouseover,
  gifTrendingMouseout,
  expandIconClick,
  xIconCardExpandedClick,
  CardMobileClick,
} from "./trendings/mainTrends.js";

import {
  favoritesLinkClick,
  heartIconClick,
} from "./favorites/mainFavorites.js";

import { gifosLinkClick } from "./gifos/mianGifos.js";
import { createGifClick } from "./createGif/mainCreate.js";

function main() {
  nemuIconClick();
  xIconClick();
  imageClick();
  changeModeClick();

  getTrendingsGifs();
  // previusButtonClick();
  // nextButtonClick();
  gifTrendingMouseover();
  gifTrendingMouseout();
  expandIconClick();
  xIconCardExpandedClick();
  CardMobileClick();


  favoritesLinkClick();
  heartIconClick();

  gifosLinkClick();
  createGifClick();
}

main();
