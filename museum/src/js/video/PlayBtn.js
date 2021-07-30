import imgSrcPlay from '../../assets/svg/play.svg';
import imgSrcPause from '../../assets/svg/pause.svg';

class PlayBtn {
  constructor (btnWrapper, video) {
    this.img = document.createElement('img');
    this.video = video;
    this.btnWrapper = btnWrapper;
  }

  stopButton () {
    this.img.src = imgSrcPlay;
    this.img.alt = 'play button';
  }

  updateButton () {
    const method = this.video.paused ? 'play' : 'pause';

    if (method === 'pause') {
      this.img.src = imgSrcPause;
      this.img.alt = 'pause button';
    }
    else if (method === 'play') {
      this.img.src = imgSrcPlay;
      this.img.alt = 'play button';
    }
  }

  togglePlay () {
    const method = this.video.paused ? 'play' : 'pause';
    this.video[method]();

    if (method === 'play') {
      this.img.src = imgSrcPause;
      this.img.alt = 'pause button';
    } else {
      this.img.src = imgSrcPlay;
      this.img.alt = 'play button';
    }
  }

  render () {
    const button = document.createElement('button');
    button.classList.add('player__controls-button');
    this.btnWrapper.appendChild(button);
    button.onclick = () => this.togglePlay();

    this.img.src = imgSrcPlay;
    this.img.alt = 'play button';
    this.img.width = '23';
    this.img.height = '30';
    button.appendChild(this.img);
    
    this.video.addEventListener('play', () => this.updateButton());
    this.video.addEventListener('pause', () => this.updateButton()); 

    return button;
  }
};

export default PlayBtn;