import playSrc from '../../assets/svg/play.svg';
import pauseSrc from '../../assets/svg/pause.svg';

class PlayButton {
  mp3: HTMLAudioElement;

  isPlay: boolean;

  constructor(mp3: HTMLAudioElement) {
    this.mp3 = mp3;
    this.isPlay = false;
  }

  playAndPause = (img: HTMLImageElement) => {
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

  render(): HTMLElement {
    const button = document.createElement('button');
    button.classList.add('song__btn');

    const img = document.createElement('img');
    img.src = playSrc;
    img.alt = 'кнопка для включения и выключения музыки';
    button.appendChild(img);

    button.onclick = () => this.playAndPause(img);

    return button;
  }
}

export { PlayButton };
