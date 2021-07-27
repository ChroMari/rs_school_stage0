class FullScreenBtn {
  constructor (bodyVideo, playWind) {
    this.bodyVideo = bodyVideo; 
    this.playWind = playWind;
    this.img = document.createElement('img');
  }

  toggleFull () {
    if (!document.fullscreenElement) { // также добавить смену картинок для кнопки
      this.playWind.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  onDocumentFullscreen () {
    if (!document.fullscreenElement) { // чисто меняем кнопку на ту, которая нам нужна
      //this.fullIconButton.classList.add(this.classOpenFullscreen);
      //this.fullIconButton.classList.remove(this.classExitFullscreen);
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