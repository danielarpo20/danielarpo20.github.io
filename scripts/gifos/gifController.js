import { getGifById } from "../apiConection.js";

const galeryContainer = document.querySelector(".myGifos-gifGalery-container");
const gifosNoContent = document.querySelector(".myGifos-gifGalery-noContent");
const cardBackGifos = document.querySelector(".myGifos-cardBack");
const gifWrapper = document.querySelector(
  ".myGifos-gifGalery-container-searchWrapper"
);
const cardBackGifosUser = document.querySelector(
  ".myGifos-cardBack-infoContainer-user"
);
const cardBackGifosTitle = document.querySelector(
  ".myGifos-cardBack-infoContainer-title"
);

export const showGifosGalery = async () => {
  const gifosToShow = await takeLocalInfo();
  if (gifosToShow.length) {
    gifWrapper.removeChild(gifWrapper.childNodes[1]);
    galeryContainer.removeChild(galeryContainer.childNodes[1]);
    galeryContainer.innerHTML = "";
    gifosNoContent.style.display = "none";
    galeryContainer.style.display = "grid";
    gifosToShow.map((gifo, index) => {
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
  }
};

async function takeLocalInfo() {
  let gifosIds = JSON.parse(localStorage.getItem("myGifs")) || [];
  if (gifosIds.length) {
    const urlArray = await Promise.all(
      gifosIds.map(async (id) => {
        const results = await getGifById(id);
        return results.data.images.original.url;
      })
    );
    return urlArray;
  }
}

export const deleteGifo = () => {
  console.log("si");
};
