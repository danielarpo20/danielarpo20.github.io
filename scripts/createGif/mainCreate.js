import {
  showVideo,
  recordVideo,
  stopVideo,
  uploadVideo,
  openGifLink,
  downloadGif,
} from "./createController.js";
import { showCreatePage } from "../helper.js";

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
  recordButton.addEventListener("click", stopVideo);
}

export function upGifoButonClick() {
  const recordButton = document.querySelector("#upGifoButon");
  recordButton.addEventListener("click", uploadVideo);
}

export function repeatLinkClick() {
  const repeatLink = document.querySelector(
    ".createGIF-container-buttoms-repeatLink"
  );
  repeatLink.addEventListener("click", showVideo);
}

export function linkButonClick() {
  const searchButon = document.querySelector(".fa-link");
  searchButon.addEventListener("click", openGifLink);
}

export function downloadButonClick() {
  const downloadButon = document.querySelector(".createGIF-icondown");
  downloadButon.addEventListener("click", downloadGif);
}

export function firstStepButonClick() {
  const oneButton = document.querySelector("#one");
  oneButton.addEventListener("click", showVideo);
}
