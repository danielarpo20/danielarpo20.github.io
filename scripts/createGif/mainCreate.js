import {
  showVideo,
  showCreatePage,
  recordVideo,
  finishVideo,
  saveVideo,
  repeatVideo,
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

export function repeatButonClick() {
  const recordButton = document.querySelector("#two");
  recordButton.addEventListener("click", recordVideo);
}
