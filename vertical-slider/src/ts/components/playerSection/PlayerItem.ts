import { Player } from './Player';

class PlayerItem {
  playerMp3_1: HTMLAudioElement;

  playerMp3_2: HTMLAudioElement;

  constructor() {
    this.playerMp3_1 = new Audio();
    this.playerMp3_2 = new Audio();
  }

  render(
    srcFirstSong: string,
    textFirstSong: string,
    srcSecondSong: string,
    textSecondSong: string,
  ): HTMLElement {
    const slider = document.createElement('div');
    slider.classList.add('song__slider');

    // srcFirstSong, textFirstSong, srcSecondSong, textSecondSong дать на render получается их
    const playerFirst = new Player(srcFirstSong, textFirstSong, this.playerMp3_1);
    slider.appendChild(playerFirst.render());

    const playerSecond = new Player(srcSecondSong, textSecondSong, this.playerMp3_2);
    slider.appendChild(playerSecond.render());

    return slider;
  }
}

export { PlayerItem };
