import { showPage } from "./createController.js";

export function createGif() {
  const createSection = document.getElementById("create");
  createSection.addEventListener("click", showPage);
}
