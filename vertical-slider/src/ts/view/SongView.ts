import { SongPlayerView } from './SongPlayerView';
import '../../styles/song.sass';

class SongView {
  srcFirstSong: string;

  textFirstSong: string;

  srcSecondSong: string;

  textSecondSong: string;

  mp3_1: HTMLAudioElement;

  mp3_2: HTMLAudioElement;

  constructor(
    srcFirstSong: string,
    textFirstSong: string,
    srcSecondSong: string,
    textSecondSong: string,
  ) {
    this.srcFirstSong = srcFirstSong;
    this.textFirstSong = textFirstSong;
    this.srcSecondSong = srcSecondSong;
    this.textSecondSong = textSecondSong;
    this.mp3_1 = new Audio();
    this.mp3_2 = new Audio();
  }

  render = (): HTMLElement => {
    const songItem = document.createElement('div');
    songItem.classList.add('song-slider-inner');

    const firstItem: SongPlayerView = new SongPlayerView(this.srcFirstSong, this.textFirstSong, this.mp3_1);
    const secondItem: SongPlayerView = new SongPlayerView(this.srcSecondSong, this.textSecondSong, this.mp3_2);
    songItem.appendChild(firstItem.render());
    songItem.appendChild(secondItem.render());

    return songItem;
  };
}

export { SongView };
