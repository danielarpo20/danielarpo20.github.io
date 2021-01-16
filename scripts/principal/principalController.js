import { apiConection } from "../apiConection.js";
import { downloadIconClick, expandIconClick } from "../trendings/mainTrends.js";
import { heartIconClick } from "../favorites/mainFavorites.js";

const autoComplete = document.querySelector(".principal-bar-autoComplete");
const searchBar = document.querySelector(".principal-bar-searchBar");
const searchIcon = document.querySelector(".principal-bar-icon");
const xIcon = document.querySelector(".principal-bar-iconX");
const searchingSection = document.querySelector(".serchingResult");
const searchNoResults = document.querySelector(".principal-noContent");
const introContainer = document.querySelector(".principal-introContainer");
const gifGalerySection = document.querySelector(".serchingResult-gifGalery");
const butonSeeMore = document.querySelector("#seeMoreButtonSearch");
const gifResultsContainer = document.querySelector(
  ".serchingResult-gifGalery-container"
);
const gifGaleryTitle = document.querySelector(
  ".serchingResult-gifGalery-title"
);
const cardBackUser = document.querySelector(".cardBack-infoContainer-user");
const cardBackTitle = document.querySelector(".cardBack-infoContainer-title");
const gifWrapper = document.querySelector(
  ".serchingResult-gifGalery-container-searchWrapper"
);
const cardBack = document.querySelector(".cardBack");

export const updatePositionsBar = async () => {
  searchBar.style.marginLeft = "4em";
  searchIcon.style.left = "1.1em";
  xIcon.style.opacity = "1";
};

export const getWatedResults = async (event) => {
  const result = await apiConection("search/tags", event.target.value);
  if (event.code === "Enter") {
    if (!result.data.length) {
      searchNoResults.style.display = "block";
      introContainer.style.display = "none";
    } else {
      searchGifByResult(result.data[0]);
      updatePositionsBar();
    }
  }
  if (result.data.length) {
    autoComplete.innerHTML = "";
    autoComplete.style.display = "inherit";
    for (let i = 0; i < 4; i++) {
      let listResultsContainer = document.createElement("div");
      let iconSearchResults = document.createElement("i");
      let listElementSearch = document.createElement("li");
      listResultsContainer.className = "principal-bar-autoComplete-results";
      iconSearchResults.className =
        "fas fa-search principal-bar-autoComplete-results-icon";
      listElementSearch.className = "principal-bar-autoComplete-results-list";
      listElementSearch.innerText = result.data[i].name;
      listResultsContainer.appendChild(iconSearchResults);
      listResultsContainer.appendChild(listElementSearch);
      autoComplete.appendChild(listResultsContainer);
    }
  } else {
    autoComplete.innerHTML = "";
  }
};

export const exitAutocomplete = () => {
  autoComplete.style.display = "none";
  xIcon.style.opacity = "0";
  searchBar.style.marginLeft = "2em";
  searchBar.value = "";
  searchIcon.style.left = "auto";
  searchIcon.style.right = "1.2em";
  searchNoResults.style.display = "none";
  introContainer.style.display = "block";
};

export const noShowResult = () => {
  exitAutocomplete();
  searchingSection.style.display = "none";
  searchNoResults.style.display = "none";
  introContainer.style.display = "block";
};

const displaySearchGalery = async (gifs, max) => {
  let data = gifs.data;
  if (gifWrapper.childNodes[1]) {
    gifWrapper.removeChild(gifWrapper.childNodes[1]);
  }
  for (let i = 0; i < max; i++) {
    if (!data[i]) {
      butonSeeMore.style.display = "none";
      butonSeeMore.click = 0;
    } else {
      cardBackUser.innerText = data[i].username || "none";
      cardBackTitle.innerText = data[i].title;
      let wrapperClone = gifWrapper.cloneNode(true);
      let cardBackClone = cardBack.cloneNode(true);
      let cardGifResult = document.createElement("img");
      cardGifResult.src = data[i].images.downsized.url;
      cardGifResult.alt = data[i].title;
      cardGifResult.user = data[i].username || "none";
      cardGifResult.title = data[i].title;
      cardGifResult.id = `gif${i}`;
      cardGifResult.style.width = "100%";
      cardGifResult.style.height = "200px";
      wrapperClone.appendChild(cardBackClone);
      wrapperClone.appendChild(cardGifResult);
      gifResultsContainer.appendChild(wrapperClone);
    }
  }
  await downloadIconClick();
  await expandIconClick();
  await heartIconClick();
};

const getApiSearchResults = async (param, limit, offset) => {
  const results = await apiConection("search", param, limit, offset);
  const data = results.data;
  return {
    data: data,
    count: data.length,
  };
};

export const searchGifByResult = async (event) => {
  exitAutocomplete();
  const searchValue = event.target ? event.target.textContent : event.name;
  event.user = searchValue;
  butonSeeMore.value = searchValue;
  butonSeeMore.style.display = "inline-block";
  butonSeeMore.click = 0;
  butonSeeMore.nextValue = 12;
  gifGaleryTitle.innerText = searchValue;
  searchingSection.style.display = "initial";
  introContainer.style.display = "none";
  gifResultsContainer.innerHTML = "";
  let data = await getApiSearchResults(searchValue);
  butonSeeMore.pagination = data.count;
  displaySearchGalery(data, 12);
};

export const showMoreSearchResults = async () => {
  let nextClick = butonSeeMore.pagination / 12;
  butonSeeMore.click = butonSeeMore.click + 1;
  butonSeeMore.nextValue = butonSeeMore.nextValue + 12;
  const results = await getApiSearchResults(
    butonSeeMore.value,
    50,
    butonSeeMore.nextValue
  );
  displaySearchGalery(results, 12);
  if (butonSeeMore.click + 1 > nextClick) {
    butonSeeMore.style.display = "none";
    butonSeeMore.click = 0;
  }
};
