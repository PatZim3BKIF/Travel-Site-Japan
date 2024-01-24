// script.js
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('autoplayVideo');
    if (video) {
        video.addEventListener('click', function () {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    }
});