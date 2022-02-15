document
  .getElementById("get-display-media-btn")
  .addEventListener("click", async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      const videoElem = document.getElementById("screen-sharing-video");
      videoElem.srcObject = stream;
    } catch (e) {
      document.getElementById("error-wrap").innerText = e.message;
    }
  });

document
  .getElementById("get-user-media-btn")
  .addEventListener("click", async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      const videoElem = document.getElementById("camera-video");
      videoElem.srcObject = stream;
    } catch (e) {
      document.getElementById("error-wrap").innerText = e.message;
    }
  });
