import { getGifById } from "../apiConection.js";

const galeryContainer = document.querySelector(".myGifos-gifGalery-container");
const gifWrapper = document.querySelector(
  ".myGifos-gifGalery-container-searchWrapper"
);
const cardBackGifos = document.querySelector(".myGifos-cardBack");
const cardBackGifosUser = document.querySelector(
  ".myGifos-cardBack-infoContainer-user"
);
const cardBackGifosTitle = document.querySelector(
  ".myGifos-cardBack-infoContainer-title"
);
const gifosNoContent = document.querySelector(".myGifos-gifGalery-noContent");

export const showGifosGalery = async () => {
  //GET GIFOS localStorage
  //   localStorage.setItem("myGifs", gifExaples);
  //   const gifosToShow = await takeLocalInfo();
  //   console.log(gifosToShow);
  //

  let gifExaples = [
    "https://media1.giphy.com/media/GJalVbOOHUmRYU7vnY/giphy.gif?cid=8e746c294db83b8acefad3dc58165dceed258f4a8c6ebf6a&rid=giphy.gif",
    "https://media1.giphy.com/media/GJalVbOOHUmRYU7vnY/giphy.gif?cid=8e746c294db83b8acefad3dc58165dceed258f4a8c6ebf6a&rid=giphy.gif",
    "https://media1.giphy.com/media/GJalVbOOHUmRYU7vnY/giphy.gif?cid=8e746c294db83b8acefad3dc58165dceed258f4a8c6ebf6a&rid=giphy.gif",
    "https://media1.giphy.com/media/GJalVbOOHUmRYU7vnY/giphy.gif?cid=8e746c294db83b8acefad3dc58165dceed258f4a8c6ebf6a&rid=giphy.gif",
    "https://media1.giphy.com/media/GJalVbOOHUmRYU7vnY/giphy.gif?cid=8e746c294db83b8acefad3dc58165dceed258f4a8c6ebf6a&rid=giphy.gif",
  ];

  if (gifExaples.length) {
    gifWrapper.removeChild(gifWrapper.childNodes[1]);
    galeryContainer.removeChild(galeryContainer.childNodes[1]);
    gifosNoContent.style.display = "none";
    galeryContainer.style.display = "grid";
    gifExaples.map((gifo, index) => {
      cardBackGifosUser.innerText = "Yo :3";
      cardBackGifosTitle.innerText = "My Gifo";
      let gifWrapperClone = gifWrapper.cloneNode(true);
      let cardBackGifosClone = cardBackGifos.cloneNode(true);
      let gifCard = document.createElement("img");
      gifCard.src = gifo;
      gifCard.alt = "My gifo";
      gifCard.user = "Personal";
      gifCard.style.width = "100%";
      gifCard.style.height = "100%";
      gifWrapperClone.appendChild(cardBackGifosClone);
      gifWrapperClone.appendChild(gifCard);
      galeryContainer.appendChild(gifWrapperClone);
    });
  } else {
  }
};

export const takeLocalInfo = () => {
  // let gifosIds = JSON.parse(localStorage.getItem("myGifs")) || [];
  let gifosIds = ["GJalVbOOHUmRYU7vnY", "GJalVbOOHUmRYU7vnY"];
  const urlArray = [];
  console.log(urlArray);
  if (gifosIds.length) {
    gifosIds.map(async (id) => {
      const results = await getGifById(id);
      urlArray.push(results.data.images.original.url);
    });
    return urlArray;
  }
};
