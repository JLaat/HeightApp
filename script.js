const distanceDisplay = document.querySelector(".distanceDisplay");
const distanceSlider = document.querySelector(".distanceSlider");
const heightDisplay = document.querySelector(".heightDisplay");

distanceSlider.oninput = function () {
    distanceDisplay.textContent = `Distance: ${this.value} meters`;
}
// Executed after page is loaded
const main = () => {
    window.addEventListener("deviceorientation", onAngleChange);

    getVideo();
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        console.log("Hello its your camera");
    }
}

// Called when phone's accelerometer detects movement
const onAngleChange = (event) => {
    let angle = event.beta - 90;
    if (angle < 0) {
        angle = 0;
    }
    console.log(angle);

    let height = Math.tan(angle * Math.PI / 180) * distanceSlider.value;

    heightDisplay.textContent = `${(Math.floor(height * 100) / 100 + 1.5).toFixed(1)} m (${angle.toFixed(1)}°)`;


}
// Asks the user for permission to use camera
const getVideo = () => {
    let videoPromise = navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}, audio: false});
    videoPromise.then(function (signal) {
        let videoElement = document.querySelector(".videoPlayer");
        videoElement.setAttribute("playsinline", true);
        videoElement.srcObject = signal;
        videoElement.play();
    }).catch((err) => {
        alert(err);
    })
}

main();

