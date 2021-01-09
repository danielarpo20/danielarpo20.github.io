const cardBack = document.querySelector(".trending-cardBack");
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

export const showCardBack = async (event) => {
  const getIdElementHovered = event.target.id;
  let cardSpecific = document.getElementById(getIdElementHovered);
  if (getIdElementHovered.includes("gif")) {
    localStorage.clear();
    localStorage.setItem("gif", cardSpecific.src);
    localStorage.setItem("userGif", cardSpecific.user);
    localStorage.setItem("titleGif", cardSpecific.title);
    localStorage.setItem("idGif", cardSpecific.id);
    const cardBack = document.getElementById(getIdElementHovered);
    document.activeElement.clientWidth > 1350
      ? (cardBack.style.zIndex = "1")
      : null;
  }
};

export const vanishCardBack = (event) => {
  // let gifCardId = event.fromElement.id;
  // if (gifCardId.includes("gif")) {
  //   let vanish = document.querySelector(`#${gifCardId}`);
  //   vanish.style.display = "none";
  // }
};

export const showCardExpanded = async () => {
  const idGif = localStorage.getItem("idGif");
  const gifCard = document.getElementById(idGif);
  gifSourceCard.setAttribute("src", gifCard.src);
  userCard.innerText = localStorage.getItem("userGif") || "none";
  titleCard.innerText = localStorage.getItem("titleGif");
  expandCard.style.display = "initial";
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
