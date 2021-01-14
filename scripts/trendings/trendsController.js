const cardBack = document.querySelector(".cardBack");
const expandCard = document.querySelector(".trending-cardExpanded");
const titleCard = document.querySelector(
  ".trending-cardExpanded-container-info-title"
);
const userCard = document.querySelector(
  ".trending-cardExpanded-container-info-user"
);
const gifSourceCard = document.querySelector(
  ".trending-cardExpanded-imageContainer-image"
);
const getCardExpanded = document.querySelector(".trending-cardExpanded");
const trendingGifosContainer = document.querySelector(
  ".trending-container-card"
);

export const showCardExpanded = () => {
  console.log('hola');
  // const idGif = localStorage.getItem("idGif");
  // const gifCard = document.getElementById(idGif);
  // gifSourceCard.setAttribute("src", gifCard.src);
  // userCard.innerText = localStorage.getItem("userGif") || "none";
  // titleCard.innerText = localStorage.getItem("titleGif");
  // expandCard.style.display = "initial";
};

export const closeCardExpanded = () => {
  getCardExpanded.style.display = "none";
};

export const showCardMobile = () => {
  if (document.activeElement.clientWidth < 1350) {
    document.onmouseover = function (event) {
      const getIdElementHovered = event.target.id;
    };
    const idGif = localStorage.getItem("idGif");
    const gifCard = document.getElementById(idGif);
    gifSourceCard.setAttribute("src", gifCard.src);
    userCard.innerText = localStorage.getItem("userGif") || "none";
    titleCard.innerText = localStorage.getItem("titleGif");
    getCardExpanded.style.display = "initial";
  }
};

export const goToNextSlide = () => {
  trendingGifosContainer.scrollLeft += 400;
};

export const goToPreviusSlide = () => {
  trendingGifosContainer.scrollLeft -= 400;
};

export const downloadGif = async (event) => {
  let url = await fetch(event.url);
  let blobObject = await url.blob();
  let objectUrl = URL.createObjectURL(blobObject);
  let saveGif = document.createElement("a");
  saveGif.href = objectUrl;
  saveGif.download = `${event.name}.gif`;
  document.body.appendChild(saveGif);
  saveGif.click();
  document.body.removeChild(saveGif);
};
