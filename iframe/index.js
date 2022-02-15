document.getElementById('get-display-media-btn').addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
        video:true
    });
    const videoElem = document.getElementById('screen-sharing-video');
    videoElem.srcObject = stream;
});

document.getElementById('get-user-media-btn').addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
        video:true
    });
    
    const videoElem = document.getElementById('camera-video');
    videoElem.srcObject = stream; 
});