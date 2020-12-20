import { inactive } from "./navbar.js";

export const switchTheme = (mode) => {
  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;

  if (currentTheme === "light") {
    mode.toElement.innerHTML = "Modo Diurno";
    setNewLogo(mode, currentTheme);
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    mode.toElement.innerHTML = "Modo Nocturno";
    setNewLogo(mode, currentTheme);
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
  inactive();
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
