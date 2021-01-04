import {
  showVideo,
  showCreatePage,
  recordVideo,
  finishVideo,
  saveVideo,
  repeatVideo,
  updateCardBackMessage,
} from "./createController.js";

export function createGifClick() {
  const createLink = document.getElementById("create");
  createLink.addEventListener("click", showCreatePage);
}

export function buttonStartClick() {
  const startButton = document.querySelector("#startButon");
  startButton.addEventListener("click", showVideo);
}

export function buttonRecordClick() {
  const recordButton = document.querySelector("#recordButon");
  recordButton.addEventListener("click", recordVideo);
}

export function buttonFinishClick() {
  const recordButton = document.querySelector("#finishButon");
  recordButton.addEventListener("click", finishVideo);
}

export function upGifoButonClick() {
  const recordButton = document.querySelector("#upGifoButon");
  recordButton.addEventListener("click", saveVideo);
}

export function repeatLinkClick() {
  const repeatLink = document.querySelector(
    ".createGIF-container-buttoms-repeatLink"
  );
  repeatLink.addEventListener("click", recordVideo);
}

export function prueba() {
  const repeatLink = document.querySelector("#three");
  repeatLink.addEventListener("click", updateCardBackMessage);
}
