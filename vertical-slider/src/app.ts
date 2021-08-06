import { VideoView } from './ts/view/VideoView';
import { links } from './ts/db/links';
import { SongView } from './ts/view/SongView';

import './styles/style.sass';
import './styles/information.sass';
import { WeatherView } from './ts/view/WeatherView';
import { headerView } from './ts/view/header';
import { SliderView } from './ts/view/SliderView';

const root = document.getElementById('root');

const info = document.createElement('div'); // общий контейнер с информацией
info.classList.add('information');

const videoCollections: Array<VideoView> = [];
const songCollections: Array<SongView> = [];
links.map((item) => {
  videoCollections.push(new VideoView(item.srcVideo));
  //  массив с классами в количестве 6 различных тем

  songCollections.push(
    new SongView(item.srcFirstSong, item.textFirstSong, item.srcSecondSong, item.textSecondSong)
  );
  // массив с музыкой в количестве 6 различных тем

  return item;
});

const v = videoCollections[0].render();
const header = headerView(v);

info.appendChild(songCollections[0].render());

//  добавление виджета с погодой
const weatherClass = new WeatherView();
info.appendChild(weatherClass.render());

// добавляем слайдер
const slider = new SliderView();

if (root) {
  root.appendChild(header);
  root.appendChild(v);
  root.appendChild(info);
  root.appendChild(slider.render());
}

// [+] видео вставляется на весь экран приложения
// [+] аудио плеер вставляется на страницу в своём месте

// [ ] слшком короткие звуки выходят попробовать поискать по длиньше
