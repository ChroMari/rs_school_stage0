import { PlayButton } from '../audio_player/PlayButton';
import { VolumeControls } from '../audio_player/VolumeControls';

class SongPlayerView {
  srcSong: string;

  textSong: string;

  mp3: HTMLAudioElement;

  constructor(srcSong: string, textSong: string) {
    this.srcSong = srcSong;
    this.textSong = textSong;
    this.mp3 = new Audio();
  }

  render = (): HTMLElement => {
    this.mp3.src = this.srcSong;
    this.mp3.loop = true;

    const itemBody = document.createElement('div');
    itemBody.classList.add('song__item', 'information-card'); // +

    const titleSong = document.createElement('h4');
    titleSong.classList.add('song__item-title'); // +
    titleSong.textContent = this.textSong;
    itemBody.appendChild(titleSong);

    const wrapperSong = document.createElement('div');
    wrapperSong.classList.add('song__player-wrapper'); // +
    itemBody.appendChild(wrapperSong);

    const playButtonSongClass = new PlayButton(this.mp3);
    wrapperSong.appendChild(playButtonSongClass.render());

    const volumeButton = new VolumeControls(this.mp3);
    wrapperSong.appendChild(volumeButton.render());

    return itemBody;
  };
}

export { SongPlayerView };

//  [+] скрытый тег для audio чтобы можно было слушать музыку
