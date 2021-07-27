/**
 * если нажать кнопку дальше, то обновление на иконку не происходит, словно видео воспроизводится остается значок
 */

class PlayBtn {
  constructor (btnWrapper, video) {
    this.img = document.createElement('img');
    this.video = video;
    this.btnWrapper = btnWrapper;
  }

  updateButton () {
    const method = this.video.paused ? 'play' : 'pause';

    if (method === 'pause') {
      this.img.src = './assets/svg/back.svg';
      this.img.alt = 'play button';
    }
    else if (method === 'play') {
      this.img.src = './assets/svg/play.svg';
      this.img.alt = 'play button';
    }
  }

  togglePlay () {
    const method = this.video.paused ? 'play' : 'pause';
    this.video[method]();

    if (method === 'play') {
      this.img.src = './assets/svg/back.svg';
      this.img.alt = 'play button';
    } else {
      this.img.src = './assets/svg/play.svg';
      this.img.alt = 'play button';
    }
  }

  render () {
    const button = document.createElement('button');
    button.classList.add('player__button');
    this.btnWrapper.appendChild(button);
    button.onclick = () => this.togglePlay();

    this.img.src = './assets/svg/play.svg';
    this.img.alt = 'play button';
    button.appendChild(this.img);
    
    this.video.addEventListener('play', () => this.updateButton());
    this.video.addEventListener('pause', () => this.updateButton()); 

    return button;
  }
};

export default PlayBtn;