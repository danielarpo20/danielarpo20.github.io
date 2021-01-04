const firstStep = document.querySelector(
  ".createGIF-container-square-video-firsStep"
);
const videoRecord = document.querySelector(
  ".createGIF-container-square-video-record"
);
const startButon = document.querySelector("#startButon");
const recordButon = document.querySelector("#recordButon");
const finishButon = document.querySelector("#finishButon");
const upGifoButon = document.querySelector("#upGifoButon");
const firstButom = document.querySelector("#one");
const secondButom = document.querySelector("#two");
const thirdButom = document.querySelector("#three");

export const showCreatePage = async () => {
  const principalSection = document.querySelector(".principal");
  const trendingsSection = document.querySelector(".trending");
  const favoritesSection = document.querySelector(".favorites");
  const gifosSection = document.querySelector(".myGifos");
  const createSection = document.querySelector(".createGIF");
  const currentTheme = getCurrentTheme();
  firstButom.style.backgroundColor =
    currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  firstButom.style.color = currentTheme === "dark" ? "#000000" : "#FFFFFF";
  principalSection.style.display = "none";
  trendingsSection.style.display = "none";
  favoritesSection.style.display = "none";
  gifosSection.style.display = "none";
  createSection.style.display = "initial";
};

export const showVideo = async () => {
  firstStep.style.display = "none";
  videoRecord.style.display = "initial";
  const currentTheme = getCurrentTheme();
  secondButom.style.backgroundColor =
    currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  secondButom.style.color = currentTheme === "dark" ? "#000000" : "#FFFFFF";
  firstButom.style.backgroundColor = "transparent";
  firstButom.style.color = currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  startButon.style.display = "none";
  recordButon.style.display = "inherit";

  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia ||
    navigator.oGetUserMedia;

  if (navigator.getUserMedia) {
    navigator.getUserMedia({ video: true }, handleVideo, videoError);
  }
};

const handleVideo = (stream) => {
  document.querySelector("#recordVideo").srcObject = stream;
};

const videoError = () => {
  alert("There was a problem with the video");
};

export const recordVideo = () => {
  recordButon.style.display = "none";
  finishButon.style.display = "inherit";
  //Record video
  //Show timer
};

export const finishVideo = () => {
  finishButon.style.display = "none";
  upGifoButon.style.display = "inherit";
};

export const saveVideo = () => {
  finishButon.style.display = "none";
  upGifoButon.style.display = "none";
  const currentTheme = getCurrentTheme();
  thirdButom.style.backgroundColor =
    currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  thirdButom.style.color = currentTheme === "dark" ? "#000000" : "#FFFFFF";
  firstButom.style.backgroundColor = "transparent";
  firstButom.style.color = currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  secondButom.style.backgroundColor = "transparent";
  secondButom.style.color = currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
};

export const repeatVideo = () => {
  // recordVideo()
};

const getCurrentTheme = () => {
  const theme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
  return theme;
};
