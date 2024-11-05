document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("background-video");
    const loadingScreen = document.querySelector(".loading-screen");

    // Hide loading screen when the video starts playing
    video.addEventListener("canplaythrough", function() {
        loadingScreen.classList.add("hidden"); // Apply fade-out effect
    });
});
