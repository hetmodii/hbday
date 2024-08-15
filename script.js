document.getElementById('playButton').addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('birthdayVideo');
    
    videoContainer.classList.remove('hidden');
    video.play();
});