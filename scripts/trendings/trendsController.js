// export const previusSlideButtom = async () => {};

// export const nextSlideButtom = async () => {};

export const showCardBack = async () => {
  document.onmouseover = function (event) {
    const getIdElementHovered = event.target.id;
    let cardSpecific = document.getElementById(getIdElementHovered);
    if (getIdElementHovered.includes("gif")) {
      localStorage.clear();
      localStorage.setItem("gif", cardSpecific.src);
      localStorage.setItem("userGif", cardSpecific.user);
      localStorage.setItem("titleGif", cardSpecific.title);
      localStorage.setItem("idGif", cardSpecific.id);
      const cardBack = document.querySelector(".trending-cardBack");
      const userCard = document.querySelector(
        ".trending-cardBack-infoContainer-user"
      );
      const titleCard = document.querySelector(
        ".trending-cardBack-infoContainer-title"
      );
      userCard.innerText = cardSpecific.user || "None";
      titleCard.innerText = cardSpecific.title;
      cardBack.style.left = `${cardSpecific.x}px`;
      cardBack.style.width = `${cardSpecific.width}px`;
      document.activeElement.clientWidth > 1350
        ? (cardBack.style.display = "flex")
        : null;
    }
  };
};

export const vanishCardBack = () => {
  const cardBack = document.querySelector(".trending-cardBack");
  cardBack.style.display = "none";
};

export const showCardExpanded = async () => {
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
  const idGif = localStorage.getItem("idGif");
  const gifCard = document.getElementById(idGif);
  gifSourceCard.setAttribute("src", gifCard.src);
  userCard.innerText = localStorage.getItem("userGif") || "none";
  titleCard.innerText = localStorage.getItem("titleGif");
  expandCard.style.display = "initial";
};

export const closeCardExpanded = () => {
  const getCardExpanded = document.querySelector(".trending-cardExpanded");
  getCardExpanded.style.display = "none";
};

export const showCardMobile = () => {
  if (document.activeElement.clientWidth < 1350) {
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

    document.onmouseover = function (event) {
      const getIdElementHovered = event.target.id;
      console.log(getIdElementHovered);
    };
    const idGif = localStorage.getItem("idGif");
    const gifCard = document.getElementById(idGif);
    gifSourceCard.setAttribute("src", gifCard.src);
    userCard.innerText = localStorage.getItem("userGif") || "none";
    titleCard.innerText = localStorage.getItem("titleGif");
    expandCard.style.display = "initial";
  }
};
