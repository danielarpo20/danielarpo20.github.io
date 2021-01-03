import { apiConexion } from "../apiConection.js";

const autoComplete = document.querySelector(".principal-bar-autoComplete");
const searchBar = document.querySelector(".principal-bar-searchBar");
const searchIcon = document.querySelector(".principal-bar-icon");
const xIcon = document.querySelector(".principal-bar-iconX");

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

export const searchGifByResult = async () => {};
