import { WebRTCClient } from "https://unpkg.com/@arcware/webrtc-plugin@latest/index_new.umd.js";

newWebRTC = new WebRTCClient({
  address: "wss://signalling-client.ragnarok.arcware.cloud/",
  shareId: "share-ebefce85-dcd0-4e31-9776-cb711a3a6b47",
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
