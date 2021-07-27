class videoView {
  constructor (playWind) {
    this.playWind = playWind;
  }

  render() {
    const video = document.createElement('video');
    video.classList.add('player__video');
    video.poster = './assets/video/preview.jpg';
    video.src = './assets/video/652333414.mp4';
    this.playWind.appendChild(video);

    return video;
  }
};

export default videoView;

/*function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}*/
//video.addEventListener('click', togglePlay); // если нажали по самому видео
