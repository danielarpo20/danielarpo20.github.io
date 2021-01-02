import { showCreatePage } from "./createController.js";

export function createGifClick() {
  const createLink = document.getElementById("create");
  createLink.addEventListener("click", showCreatePage);
}
