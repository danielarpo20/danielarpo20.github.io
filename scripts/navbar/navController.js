export const goPrincpalPage = () => {
  const principalSection = document.querySelector(".principal");
  const gifosSection = document.querySelector(".myGifos");
  const favoritesSection = document.querySelector(".favorites");
  const createSection = document.querySelector(".createGIF");
  const trendingSection = document.querySelector(".trending");
  principalSection.style.display = "initial";
  trendingSection.style.display = "initial";
  gifosSection.style.display = "none";
  favoritesSection.style.display = "none";
  createSection.style.display = "none";
};

export const ShowMenuMobile = () => {
  document.querySelector(".navbar").classList.add("active");
  document.querySelector(".header-icon").classList.add("active");
  document.querySelector(".header-iconX").classList.add("active");
};

export const CloseMenuMobile = () => {
  document.querySelector(".navbar").classList.remove("active");
  document.querySelector(".header-icon").classList.remove("active");
  document.querySelector(".header-iconX").classList.remove("active");
};

export const switchTheme = (mode) => {
  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
  if (currentTheme === "light") {
    mode.originalTarget.firstChild.data = "Modo Diurno";
    setNewLogo(mode, currentTheme);
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    mode.originalTarget.firstChild.data = "Modo Nocturno";
    setNewLogo(mode, currentTheme);
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
  CloseMenuMobile();
};

const setNewLogo = (mode, theme) => {
  const screenSize = mode.view.innerWidth;
  let imgMobileLight = document.querySelector(
    ".header-imgContainer-logo-mobile"
  );
  let imgMobileDark = document.querySelector(
    ".header-imgContainer-logo-mobile-noc"
  );
  let imgDesktopLight = document.querySelector(
    ".header-imgContainer-logo-desktop"
  );
  let imgDesktopDark = document.querySelector(
    ".header-imgContainer-logo-desktop-noc"
  );
  imgDesktopLight.style.display = "none";
  imgDesktopDark.style.display = "none";
  imgMobileLight.style.display = "none";
  imgMobileDark.style.display = "none";
  if (screenSize < 1350) {
    if (theme === "light") {
      imgMobileDark.style.display = "initial";
    } else {
      imgMobileLight.style.display = "initial";
    }
  } else {
    if (theme === "light") {
      imgDesktopDark.style.display = "initial";
    } else {
      imgDesktopLight.style.display = "initial";
    }
  }
};
