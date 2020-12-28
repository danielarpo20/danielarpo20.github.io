import { showPage } from "./create.js";

export function createGif() {
  const createSection = document.getElementById("create");
  createSection.addEventListener("click", showPage);
}
