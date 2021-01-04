import { apiConexion } from "../apiConection.js";

const autoComplete = document.querySelector(".principal-bar-autoComplete");
const searchBar = document.querySelector(".principal-bar-searchBar");
const searchIcon = document.querySelector(".principal-bar-icon");
const xIcon = document.querySelector(".principal-bar-iconX");
const searchingSection = document.querySelector(".serchingResult");
const gifResultsContainer = document.querySelector(
  ".serchingResult-gifGalery-container"
);
const introContainer = document.querySelector(".principal-introContainer");
const gifGaleryContainer = document.querySelector(".serchingResult-gifGalery");

export const updatePositionsBar = async () => {
  searchBar.style.marginLeft = "4em";
  searchIcon.style.left = "1.1em";
  xIcon.style.opacity = "1";
};

export const getWatedResults = async () => {
  document.onkeyup = async function (event) {
    const result = await apiConexion("search/tags", event.target.value);
    if (result.data.length) {
      autoComplete.style.display = "inherit";
      for (let i = 0; i < 3; i++) {
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
    }
  };
};

export const exitAutocomplete = () => {
  autoComplete.style.display = "none";
  xIcon.style.opacity = "0";
  searchBar.style.marginLeft = "2em";
  searchIcon.style.left = "auto";
  searchIcon.style.right = "1.2em";
};

export const searchGifByResult = async () => {
  const results = await apiConexion("search", "mascotas");
  searchingSection.style.display = "initial";
  introContainer.style.display = "none";
  results.data.map((result, index) => {
    let cardGifResult = document.createElement("img");
    cardGifResult.src = result.images.downsized.url;
    cardGifResult.alt = result.title;
    cardGifResult.user = result.username;
    cardGifResult.title = result.title;
    cardGifResult.id = `gif${index}`;
    cardGifResult.style.width = "100%";
    cardGifResult.style.height = "200px";
    gifResultsContainer.appendChild(cardGifResult);
  });
};
