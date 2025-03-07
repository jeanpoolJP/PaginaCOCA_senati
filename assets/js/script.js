var myCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
    interval: false
});

const video = document.getElementById("myVideo");
const playButton = document.getElementById("playButton");

function playVideo() {
    video.play();
    playButton.style.display = "none";
}

// Mostrar el botón cuando el video termina
video.addEventListener("ended", () => {
    playButton.style.display = "flex";
});

// Alternar reproducción con clic en el video
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.style.display = "none";
    } else {
        video.pause();
        playButton.style.display = "flex";
    }
}