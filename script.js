
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


toggle.addEventListener('click', ()=>{
	if(video.paused){
		video.play();
		toggle.textContent ="❚ ❚"
	}else{
		video.pause();
		toggle.textContent = "►"
	}
});

const progressBar = document.getElementById("progressBar");

video.addEventListener("timeupdate", function() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = progress
});


