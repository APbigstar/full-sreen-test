import { WebRTCClient } from "https://unpkg.com/@arcware/webrtc-plugin@latest/index_new.umd.js";

newWebRTC = new WebRTCClient({
  address: "wss://signalling-client.ragnarok.arcware.cloud/",
  shareId: "share-5b34bbc5-6211-45cd-b0d8-f7b0c32a7a9d",
  settings: {},
  playOverlay: false,

  loader: (val) => {
    if (val) {
      showLoader(); // Assume this function shows a loading indicator
    } else {
      hideLoader(); // Assume this function hides the loading indicator
    }
  },

  applicationResponse: (response) => {
    if (response) {
      const message = response.split(":")[1].trim();
      addBotMessage(message);
    } // Logging the response
  },

  sizeContainer: document.getElementById("sizeContainer"),
  container: document.getElementById("videoContainer"),
  audioRef: document.getElementById("audioRef"),
});

function showLoader() {
    const loaderOverlay = document.querySelector(".loader-overlay");
    if (loaderOverlay) {
      loaderOverlay.style.display = "flex";
    }
  }
  
  function hideLoader() {
    const loaderOverlay = document.querySelector(".loader-overlay");
    if (loaderOverlay) {
      loaderOverlay.style.display = "none";
    }
  }