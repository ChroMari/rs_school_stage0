class FullScreenBtn {
  constructor (bodyVideo, playWind) {
    this.bodyVideo = bodyVideo; 
    this.playWind = playWind;
    this.img = document.createElement('img');
  }

  toggleFull () {
    if (!document.fullscreenElement) {
      this.playWind.requestFullscreen();
      this.img.src = './assets/svg/no_fullscreen.svg';
      this.img.alt = 'fullscreen exit';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        this.img.src = './assets/svg/fullsreen.svg';
        this.img.alt = 'fullscreen open';
      }
    }
  }

  onDocumentFullscreen () {
    if (!document.fullscreenElement) {
      this.img.src = './assets/svg/fullsreen.svg';
      this.img.alt = 'fullscreen open';
    }
  }

  render () {
    const button = document.createElement('button');
    this.bodyVideo.appendChild(button);
    button.onclick = () => this.toggleFull();

    this.img.src = './assets/svg/fullsreen.svg';
    this.img.alt = 'fullscreen open';
    button.appendChild(this.img);

    document.addEventListener('fullscreenchange', () => this.onDocumentFullscreen());

    return button;
  }
};

export default FullScreenBtn;