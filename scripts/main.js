let navBars = document.querySelector("prueba");
let navOut = document.getElementsByClassName(".navbar");
let navToggel = document.getElementsByClassName(".");

navBars.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
    mobileMenuBtn.innerHTML = "Close";
  } else {
    mobileMenu.style.display = "none";
    mobileMenuBtn.innerHTML = "Menu";
  }
});
