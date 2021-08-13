import { links } from '../../database/links_song';
import { PlayerItem } from './PlayerItem';

import '../../../styles/song.sass';

class PlayersSlider {
  playerVies: Array<HTMLElement>;
  playerMp3s: Array<HTMLAudioElement>;
  containerSong: HTMLElement;

  constructor() {
    this.playerVies = []; // по 2 штуке вместе лежат
    this.playerMp3s = []; // лежат чисто для каждого mp3
    this.containerSong = document.createElement('div');
  }

  render() {
    const song = document.createElement('section');
    song.classList.add('song');

    this.containerSong.classList.add('song-sliders');
    song.appendChild(this.containerSong);

    links.forEach((link, index) => {
      const { srcFirstSong, textFirstSong, srcSecondSong, textSecondSong } = link;
      const item = new PlayerItem();

      this.playerVies.push(item.render(srcFirstSong, textFirstSong, srcSecondSong, textSecondSong)); // собираем элементы в массив
      this.playerMp3s.push(item.playerMp3_1);
      this.playerMp3s.push(item.playerMp3_2);

      this.containerSong.appendChild(this.playerVies[index]);
    });

    return song;
  }
}

export { PlayersSlider };

/**
 * song - главная обёртка для плеера +
 * song-sliders - хранит все отрендеренные пары рендеров +
 * song__slider - div в котором находятся два отрендеренных элемента
 *  song-item - обёртка для одного плеера
 *    song-item__title - название песни
 *    song-item-wrapper - обрётка для кнопок
 *    song-item__button - кнопка для включения и выключения воспроизведения звука
 *    song-item-wrapper song-item-wrapper--volume - обертка и полоса разделения для музыки
 *      song-item__button
 *      song-item__progress
 *
 *
 */
