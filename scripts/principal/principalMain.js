import {
  getWatedResults,
  updatePositionsBar,
  exitAutocomplete,
  searchGifByResult,
} from "./principalController.js";

export function searchBarClick() {
  const searchBar = document.querySelector(".principal-bar-searchBar");
  searchBar.addEventListener("click", updatePositionsBar);
}

export function TypeSearchBar() {
  const searchBar = document.querySelector(".principal-bar-searchBar");
  searchBar.addEventListener("keyup", getWatedResults);
}

export function xIconSearchBar() {
  const xIconSearchBar = document.querySelector(".principal-bar-iconX");
  xIconSearchBar.addEventListener("click", exitAutocomplete);
}

export function listResultsClick() {
  // const autocompleteResult = document.querySelector(
  //   ".principal-bar-autoComplete-results-list"
  // );
  // autocompleteResult.addEventListener("click", searchGifByResult);
}

export function listResultsEnter(){
  const searchBar = document.querySelector(".principal-bar-searchBar");
  searchBar.addEventListener("mouseover", searchGifByResult);
}