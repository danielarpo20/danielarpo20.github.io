export const getCardsBack = async () => {
  document.onmouseover = function (event) {
    const getIdElementHovered = event.target.id;
    let cardSpecific = document.getElementById(getIdElementHovered);
    if (getIdElementHovered) {
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
      cardBack.style.display = "flex";
    }
  };
};

export const vanishCardsBack = () => {
  const cardBack = document.querySelector(".trending-cardBack");
  cardBack.style.display = "none";
};
