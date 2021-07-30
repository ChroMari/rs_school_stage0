import imgSrcNoFullscreen from '../../assets/svg/no_fullscreen.svg';
import imgSrcFullscreen from '../../assets/svg/fullsreen.svg';

class FullScreenBtn {
  constructor (bodyVideo, playWind) {
    this.bodyVideo = bodyVideo; 
    this.playWind = playWind;
    this.img = document.createElement('img');
  }

  toggleFull () {
    if (!document.fullscreenElement) {
      this.playWind.requestFullscreen();
      this.img.src = imgSrcNoFullscreen;
      this.img.alt = 'fullscreen exit';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        this.img.src = imgSrcFullscreen;
        this.img.alt = 'fullscreen open';
      }
    }
  }

  onDocumentFullscreen () {
    if (!document.fullscreenElement) {
      this.img.src = imgSrcFullscreen;
      this.img.alt = 'fullscreen open';
    }
  }

  render () {
    const button = document.createElement('button');
    this.bodyVideo.appendChild(button);
    button.classList.add('player__controls-btn');
    button.onclick = () => this.toggleFull();
    this.img.src = imgSrcFullscreen;
    this.img.alt = 'fullscreen open';
    button.appendChild(this.img);

    document.addEventListener('fullscreenchange', () => this.onDocumentFullscreen());

    return button;
  }
};

export default FullScreenBtn;