import { getCurrentTheme } from "../helper.js";

const firstStep = document.querySelector(
  ".createGIF-container-square-video-firsStep"
);
const videoRecord = document.querySelector(
  ".createGIF-container-recordContainer-record"
);
const repeatLink = document.querySelector(
  ".createGIF-container-buttoms-repeatLink"
);
const videoContainer = document.querySelector(
  ".createGIF-container-recordContainer"
);
const cardBackContainer = document.querySelector(
  ".createGIF-container-recordContainer-cardBack"
);
const startButon = document.querySelector("#startButon");
const recordButon = document.querySelector("#recordButon");
const finishButon = document.querySelector("#finishButon");
const upGifoButon = document.querySelector("#upGifoButon");
const firstButom = document.querySelector("#one");
const secondButom = document.querySelector("#two");
const thirdButom = document.querySelector("#three");
const iconCardBack = document.querySelector("#iconCardBack");
const textCardBack = document.querySelector("#textCardBack");
const firstStepTitle = document.querySelector(
  ".createGIF-container-square-video-firsStep-title"
);
const firstStepText = document.querySelector(
  ".createGIF-container-square-video-firsStep-text"
);
const timing = document.querySelector(".createGIF-container-buttoms-timming");
const video = document.querySelector("#recordVideo");

// let recorder = RecordRTC(stream, {
//   type: 'gif',
//   frameRate: 1,
//   quality: 10,
//   width: 360,
//   hidden: 240,
//   onGifRecordingStarted: function() {
//    console.log('started')
//  },
// });

export const showVideo = async () => {
  // firstStep.style.display = "none";
  firstStepTitle.innerText = "¿Nos das acceso a tu cámara?";
  firstStepText.innerText =
    "El acceso a tu camara será válido sólo por el tiempo en el que estés creando el GIFO.";
  videoContainer.style.display = "flex";
  const currentTheme = getCurrentTheme();
  secondButom.style.backgroundColor =
    currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  secondButom.style.color = currentTheme === "dark" ? "#000000" : "#FFFFFF";
  firstButom.style.backgroundColor = "transparent";
  firstButom.style.color = currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  startButon.style.display = "none";
  recordButon.style.display = "inherit";

};

const handleVideo = (stream) => {
  video.srcObject = stream;
  video.play();
};

const videoError = () => {
  alert("There was a problem with the video");
};

// const startRecording = (stream, lengthInMS) => {
//   try {
//     const stream = await navigator.mediaDevices.getUserMedia({
//       audio: false,
//       video: {
//         width: 480, 
//         height: 320
//       }
//     })
//   } catch(error) {

//   }
// };

export const recordVideo = () => {
  recordButon.style.display = "none";
  upGifoButon.style.display = "none";
  finishButon.style.display = "inherit";
  //Show timer
  //Record video
};

export const finishVideo = () => {
  finishButon.style.display = "none";
  upGifoButon.style.display = "inherit";
  repeatLink.style.display = "initial";
};

export const saveVideo = () => {
  finishButon.style.display = "none";
  upGifoButon.style.display = "none";
  repeatLink.style.display = "none";
  cardBackContainer.style.display = "initial";
  const currentTheme = getCurrentTheme();
  thirdButom.style.backgroundColor =
    currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  thirdButom.style.color = currentTheme === "dark" ? "#000000" : "#FFFFFF";
  firstButom.style.backgroundColor = "transparent";
  firstButom.style.color = currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  secondButom.style.backgroundColor = "transparent";
  secondButom.style.color = currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
};

export const updateCardBackMessage = () => {
  iconCardBack.className =
    "fas fa-check createGIF-container-recordContainer-cardBack-infoContainer-icon";
  textCardBack.innerText = "GIFO subido con éxito";
};
