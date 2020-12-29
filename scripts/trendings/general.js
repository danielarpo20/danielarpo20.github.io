export const getCards = async () => {
    document.onmouseover = function (e) {
      const idHover = e.target.id;
      if (idHover) {
        const caId = document.getElementById(idHover);
        // caId.style.backgroundColor = 'tomato'
        console.log(caId);
      }
    };
  };