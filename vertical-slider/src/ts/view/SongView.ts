import { SongPlayerView } from './SongPlayerView';

class SongView {
  srcFirstSong: string;

  textFirstSong: string;

  srcSecondSong: string;

  textSecondSong: string;

  constructor(
    srcFirstSong: string,
    textFirstSong: string,
    srcSecondSong: string,
    textSecondSong: string
  ) {
    this.srcFirstSong = srcFirstSong;
    this.textFirstSong = textFirstSong;
    this.srcSecondSong = srcSecondSong;
    this.textSecondSong = textSecondSong;
  }

  render = (): HTMLElement => {
    const div = document.createElement('div');
    div.classList.add('song-body');
    // и вот уже отсюда вызвать те два других плеера по отдельности
    const firstItem: SongPlayerView = new SongPlayerView(this.srcFirstSong, this.textFirstSong);
    const secondItem: SongPlayerView = new SongPlayerView(this.srcSecondSong, this.textSecondSong);

    div.appendChild(firstItem.render());
    div.appendChild(secondItem.render());
    return div;
  };
}

export { SongView };
