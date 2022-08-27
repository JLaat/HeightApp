const distanceDisplay = document.querySelector(".distanceDisplay");
const distanceSlider = document.querySelector(".distanceSlider");
const  heightDisplay = document.querySelector(".heightDisplay");

distanceSlider.oninput = function () {
    distanceDisplay.textContent = `Distance: ${this.value} meters`;
}
// Executed after page is loaded
const main = () => {
    console.log("nonii");
    screen.orientation.addEventListener("change", function (event) {
        onAngleChange(event);
    })
    getVideo();
}

// Called when phone's accelerometer detects movement
const onAngleChange = (event) => {
    let angle = event.beta - 90;
    if (angle < 0) {
        angle = 0;
    }

    let height = Math.tan(angle*Math.PI/180)*distanceDisplay.textContent;
    heightDisplay.textContent = height;
    console.log("Toimii");

}
// Asks the user for permission to use camera
const getVideo = () => {
    let videoPromise = navigator.mediaDevices.getUserMedia({video: true, audio: false});
    videoPromise.then(function (signal) {
        let videoElement = document.querySelector(".videoPlayer");
        videoElement.srcObject = signal;
        videoElement.play();
    })
}


