import { PlayButton } from './PlayButton';
import { PlayVolume } from './PlayVolume';

class Player {
  src: string;

  text: string;

  audio: HTMLAudioElement;

  constructor(src: string, text: string, audio: HTMLAudioElement) {
    this.src = src;
    this.text = text;
    this.audio = audio;
  }

  render(): HTMLElement {
    /*
    *    song-item__button - кнопка для включения и выключения воспроизведения звука

    *    song-item-wrapper song-item-wrapper--volume - обертка и полоса разделения для музыки
    *      song-item__button
    *      song-item__progress */

    this.audio.src = this.src;
    this.audio.loop = true;

    const player = document.createElement('div');
    player.classList.add('song-item');

    const title = document.createElement('h4');
    title.classList.add('song-item__title');
    title.textContent = this.text;
    player.appendChild(title);

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('song-item-wrapper');
    player.appendChild(buttonWrapper);

    const button = new PlayButton(this.audio);
    buttonWrapper.appendChild(button.render());

    const volume = new PlayVolume(this.audio);
    buttonWrapper.appendChild(volume.render());

    // PlayVolume - для убавления или увелечения громкости звука
    // PlayButton - кнопка для активации и паузы

    return player;
  }
}

export { Player };
