import { getCurrentTheme, activeLinksMenu } from "../helper.js";

let imgMobileLight = document.querySelector(".header-imgContainer-logo-mobile");
let imgMobileDark = document.querySelector(
  ".header-imgContainer-logo-mobile-noc"
);
let imgDesktopLight = document.querySelector(
  ".header-imgContainer-logo-desktop"
);
let imgDesktopDark = document.querySelector(
  ".header-imgContainer-logo-desktop-noc"
);

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
  const currentTheme = getCurrentTheme();
  if (currentTheme === "light") {
    mode.target.firstChild.data = "Modo Diurno";
    setNewLogo(mode, currentTheme);
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    mode.target.firstChild.data = "Modo Nocturno";
    setNewLogo(mode, currentTheme);
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
  CloseMenuMobile();
  activeLinksMenu();
};

const setNewLogo = (mode, theme) => {
  const screenSize = mode.view.innerWidth;
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
