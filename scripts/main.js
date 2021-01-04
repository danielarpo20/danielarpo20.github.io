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

import {
  TypeSearchBar,
  searchBarClick,
  xIconSearchBar,
  listResultsClick,
  listResultsEnter,
} from "./principal/principalMain.js";

import { gifosLinkClick } from "./gifos/mianGifos.js";
import {
  createGifClick,
  buttonStartClick,
  buttonRecordClick,
  buttonFinishClick,
  upGifoButonClick,
  repeatButonClick,
} from "./createGif/mainCreate.js";

function main() {
  nemuIconClick();
  xIconClick();
  imageClick();
  changeModeClick();

  TypeSearchBar();
  searchBarClick();
  xIconSearchBar();
  listResultsClick();
  listResultsEnter();

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
  buttonStartClick();
  buttonRecordClick();
  buttonFinishClick();
  upGifoButonClick();
  repeatButonClick();
}

main();
