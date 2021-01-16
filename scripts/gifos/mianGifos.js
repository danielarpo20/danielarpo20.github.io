import { removeGifo } from "./gifController.js";

export function trashIconClick() {
  const trashIcon = document.querySelectorAll(".fa-trash-alt");
  for (let trash of trashIcon) {
    trash.addEventListener("click", removeGifo);
  }
}
