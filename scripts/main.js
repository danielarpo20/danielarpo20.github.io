import {
  nemuIconClick,
  xIconClick,
  imageClick,
  changeModeClick,
  favoritesLinkClick,
  gifosLinkClick,
} from "./navbar/mainNav.js";

import {
  getTrendingsGifs,
  previusButtonClick,
  nextButtonClick,
  expandIconClick,
  xIconCardExpandedClick,
  CardMobileClick,
  downloadIconClick,
} from "./trendings/mainTrends.js";

import { heartIconClick } from "./favorites/mainFavorites.js";

import {
  TypeSearchBar,
  searchBarClick,
  xIconSearchBarClick,
  listResultsClick,
  butonSeeMoreClick,
} from "./principal/principalMain.js";

import { trashIconClick } from "./gifos/mianGifos.js";

import {
  createGifClick,
  buttonStartClick,
  buttonRecordClick,
  buttonFinishClick,
  upGifoButonClick,
  repeatLinkClick,
  linkButonClick,
  downloadButonClick,
  firstStepButonClick,
} from "./createGif/mainCreate.js";

async function main() {
  nemuIconClick();
  xIconClick();
  imageClick();
  changeModeClick();
  favoritesLinkClick();
  gifosLinkClick();

  TypeSearchBar();
  searchBarClick();
  xIconSearchBarClick();
  listResultsClick();
  butonSeeMoreClick();

  trashIconClick();

  await getTrendingsGifs();
  previusButtonClick();
  nextButtonClick();
  expandIconClick();
  xIconCardExpandedClick();
  CardMobileClick();
  downloadIconClick();

  heartIconClick();

  createGifClick();
  buttonStartClick();
  buttonRecordClick();
  buttonFinishClick();
  upGifoButonClick();
  repeatLinkClick();
  linkButonClick();
  downloadButonClick();
  firstStepButonClick();
}

main();
