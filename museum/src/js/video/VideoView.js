import videoSrc from '../../assets/video/001.mp4';
import imgSrc from '../../assets/video/preview.jpg';

class videoView {
  constructor (playWind) {
    this.playWind = playWind;
  }

  render() {
    const video = document.createElement('video');
    video.classList.add('player__video');
    video.poster = imgSrc;
    video.src = videoSrc;
    this.playWind.appendChild(video);

    return video;
  }
};

export default videoView;
