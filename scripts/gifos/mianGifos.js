import { showGifosSection } from "./gifController.js";

export function gifosLinkClick() {
  const gifosLink = document.getElementById("gifos");
  gifosLink.addEventListener("click", showGifosSection);
}
