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
const iconHeartCardExpand = document.querySelector(
  ".trending-cardExpanded-container-containerIcons-heart"
);

export const showCardExpanded = (event) => {
  gifSourceCard.setAttribute(
    "src",
    event.target.offsetParent.nextElementSibling.currentSrc
  );
  iconHeartCardExpand.firstElementChild.className =
    event.target.offsetParent.childNodes[1].childNodes[1].firstElementChild.className;
  userCard.innerText =
    event.target.offsetParent.lastElementChild.childNodes[1].innerText;
  titleCard.innerText =
    event.target.offsetParent.lastElementChild.childNodes[3].innerText;
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
