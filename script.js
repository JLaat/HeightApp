const main = () => {
    window.addEventListener("orientationchange", onAngleChange);
}


const onAngleChange = (event) => {
    let angle = event.beta - 90;
    if (angle < 0) {
        angle = 0;
    }
}

const getVideo = () => {
    let videoPromise = navigator.mediaDevices.getUserMedia({video: {facingMode: {exact: "environment"}}, audio: false});

    videoPromise.then(function (signal) {
        let videoElement = document.createElement("video");
        videoElement.srcObject = signal;
        videoElement.play();
    })

}