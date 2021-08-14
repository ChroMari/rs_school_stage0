import playSrc from '../../../assets/svg/play.svg';
import pauseSrc from '../../../assets/svg/pause.svg';

class PlayButton {
  mp3: HTMLAudioElement;

  isPlay: boolean;

  constructor(mp3: HTMLAudioElement) {
    this.mp3 = mp3;
    this.isPlay = false;
  }

  playAndPause = (img: HTMLImageElement): void => {
    const oldImg = img;
    if (!this.isPlay) {
      this.isPlay = true;
      oldImg.src = pauseSrc;
      this.mp3.play();
    } else {
      this.isPlay = false;
      oldImg.src = playSrc;
      this.mp3.pause();
    }
  };

  stop = (img: HTMLImageElement): void => {
    const oldImg = img;
    oldImg.src = playSrc;
    this.isPlay = false;
  };

  start = (img: HTMLImageElement): void => {
    this.isPlay = true;
    const oldImg = img;
    oldImg.src = pauseSrc;
  };

  render = (): HTMLElement => {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('song-item__button');

    const img = document.createElement('img');
    img.src = playSrc;
    img.alt = 'кнопка для включения и выключения музыки';
    button.appendChild(img);

    button.onclick = () => this.playAndPause(img);

    this.mp3.addEventListener('pause', () => this.stop(img));
    this.mp3.addEventListener('play', () => this.start(img));

    return button;
  };
}

export { PlayButton };
