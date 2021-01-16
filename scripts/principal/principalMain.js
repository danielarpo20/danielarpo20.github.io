import {
  getWatedResults,
  updatePositionsBar,
  noShowResult,
  searchGifByResult,
  showMoreSearchResults,
} from "./principalController.js";

export function searchBarClick() {
  const searchBar = document.querySelector(".principal-bar-searchBar");
  searchBar.addEventListener("click", updatePositionsBar);
}

export function TypeSearchBar() {
  const searchBar = document.querySelector(".principal-bar-searchBar");
  searchBar.addEventListener("keyup", getWatedResults);
}

export function xIconSearchBarClick() {
  const xIconSearchBar = document.querySelector(".principal-bar-iconX");
  xIconSearchBar.addEventListener("click", noShowResult);
}

export function listResultsClick() {
  const autocompleteResult = document.querySelector(
    ".principal-bar-autoComplete"
  );
  autocompleteResult.addEventListener("click", searchGifByResult);
}

export function butonSeeMoreClick() {
  const butonSeeMore = document.querySelector("#seeMoreButtonSearch");
  butonSeeMore.addEventListener("click", showMoreSearchResults);
}
