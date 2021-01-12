import { getCurrentTheme } from "../helper.js";
import { uploadTogiphy, getBlobById } from "../apiConection.js";

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
const firstStepTitle = document.querySelector(
  ".createGIF-container-square-video-firsStep-title"
);
const firstStepText = document.querySelector(
  ".createGIF-container-square-video-firsStep-text"
);
const iconContainerCardBack = document.querySelector(
  ".createGIF-container-recordContainer-cardBack-iconContainer"
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
const timing = document.querySelector(".createGIF-container-buttoms-timming");
const video = document.querySelector("#recordVideo");

let streamContainer;
let recorder;
let gifBlob;
let gifCreatedId;
let gifCreatedUrl;
let interval;
const timerRefreshRate = 30;

export const showVideo = async () => {
  firstStepTitle.innerText = "¿Nos das acceso a tu cámara?";
  firstStepText.innerText =
    "El acceso a tu camara será válido sólo por el tiempo en el que estés creando el GIFO.";
  const currentTheme = getCurrentTheme();
  secondButom.style.backgroundColor =
    currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  secondButom.style.color = currentTheme === "dark" ? "#000000" : "#FFFFFF";
  firstButom.style.backgroundColor = "transparent";
  firstButom.style.color = currentTheme === "dark" ? "#FFFFFF" : "#572EE5";
  startButon.style.display = "none";
  recordButon.style.display = "inherit";
  upGifoButon.style.display = "none";
  repeatLink.style.display = "none";
  await getStream();
};

const getStream = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: 470,
        height: 300,
      },
    });
    videoContainer.style.transform = "rotateX(0) scale(1)";
    recordButon.style.display = "inherit";
    streamContainer = stream;
    video.srcObject = stream;
    video.play();
    return stream;
  } catch (error) {
    alert("Unable to capture your camera.");
  }
};

export const recordVideo = async () => {
  timing.style.display = "block";
  repeatLink.style.display = "none";
  recordButon.style.display = "none";
  upGifoButon.style.display = "none";
  finishButon.style.display = "inherit";
  recorder = RecordRTC(streamContainer, {
    type: "gif",
    frameRate: 1,
    quality: 10,
    width: 360,
    hidden: 240,
    onGifRecordingStarted: function () {
      console.log("Gif recording started.");
    },
  });
  initTime();
  recorder.startRecording();
  recorder.camera = streamContainer;
};

export const stopVideo = async () => {
  finishButon.style.display = "none";
  upGifoButon.style.display = "inherit";
  repeatLink.style.display = "initial";
  timing.style.display = "none";
  try {
    recorder.stopRecording(() => {
      console.log("stopRecording success");
      gifBlob = recorder.getBlob();
      recorder.camera.stop();
      recorder.destroy();
      recorder = null;
    });
  } catch (error) {
    console.error(error);
  }
  stopTimer();
};

export const uploadVideo = async () => {
  cardBackContainer.style.display = "initial";
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

  try {
    const formData = new FormData();
    formData.append("file", gifBlob, "myGif.gif");
    const parameters = {
      method: "POST",
      body: formData,
      json: true,
    };
    console.log(formData.get("file"));
    let result = await uploadTogiphy(parameters);
    gifCreatedId = result.data.id;
    gifCreatedUrl = `https://media.giphy.com/media/${gifCreatedId}/giphy.gif`;
    updateCardBackMessage();
    saveGifoInLocal(gifCreatedId);
  } catch (error) {
    console.error(error);
  }
};

const updateCardBackMessage = () => {
  iconContainerCardBack.style.display = "flex";
  iconCardBack.className =
    "fas fa-check createGIF-container-recordContainer-cardBack-infoContainer-icon";
  iconCardBack.style.animation = "none";
  textCardBack.innerText = "GIFO subido con éxito";
};

const initTime = () => {
  let initialTime = Date.now();
  interval = setInterval(() => {
    let currentTime = Date.now();
    let timeDiff = currentTime - initialTime;
    msFormat(timeDiff);
  }, timerRefreshRate);
};

const msFormat = (mSeconds) => {
  const mss = Math.floor((mSeconds % 1000) / 10);
  const sec = Math.floor((mSeconds / 1000) % 60);
  const min = Math.floor((mSeconds / (1000 * 60)) % 60);
  const hs = Math.floor((mSeconds / (1000 * 60 * 60)) % 24);
  renderTime(hs, min, sec, mss);
};

const renderTime = (hs, min, sec, mss) => {
  hs = hs < 10 ? "0" + hs : hs;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  mss = mss < 10 ? "0" + mss : mss;
  timing.innerText = `${hs}:${min}:${sec}`;
};

const stopTimer = () => {
  clearInterval(interval);
};

export const openGifLink = () => {
  window.open(gifCreatedUrl);
};

export const downloadGif = async () => {
  let result = await getBlobById(gifCreatedId);
  const gifUrl = URL.createObjectURL(result);
  const saveGif = document.createElement("a");
  saveGif.href = gifUrl;
  saveGif.download = "myGifo.gif";
  saveGif.style.display = "none";
  document.body.appendChild(saveGif);
  saveGif.click();
  document.body.removeChild(saveGif);
};

export const saveGifoInLocal = (gifUrl) => {
  let actualGif = JSON.parse(localStorage.getItem("myGifs")) || [];
  actualGif.push(gifUrl);
  localStorage.setItem("myGifs", JSON.parse(actualGif));
};
