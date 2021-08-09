import { VideoView } from './ts/view/VideoView';
import { links } from './ts/db/links';
import { SongView } from './ts/view/SongView';

import './styles/style.sass';
import './styles/information.sass';
import { WeatherView } from './ts/view/weatherView';
import { headerView } from './ts/view/header';
import { SliderView } from './ts/view/SliderView';
import { LogicSlider } from './ts/slider/logic';

const root = document.getElementById('root');

const info = document.createElement('div'); // общий контейнер с информацией
info.classList.add('information');

const videoSliderWrapper = document.createElement('div');
videoSliderWrapper.classList.add('video-slider__wrapper');

const videoSliders = document.createElement('div');
videoSliders.classList.add('video-slider__sliders');
videoSliderWrapper.appendChild(videoSliders);

const videoCollections: Array<VideoView> = [];
const videoCollectionsRender: Array<HTMLDivElement> = [];
const songCollections: Array<SongView> = [];
links.map((item, indx) => {
  videoCollections.push(new VideoView(item.srcVideo));
  videoCollectionsRender.push(videoCollections[indx].render());
  videoSliders.appendChild(videoCollectionsRender[indx]);
  console.log(indx, videoCollectionsRender[indx]);
  //  массив с классами в количестве 6 различных тем

  songCollections.push(
    new SongView(item.srcFirstSong, item.textFirstSong, item.srcSecondSong, item.textSecondSong),
  );
  // массив с музыкой в количестве 6 различных тем

  return item;
});

const header = headerView(videoCollectionsRender[0]);

info.appendChild(songCollections[0].render());

//  добавление виджета с погодой
const weatherClass = new WeatherView();
info.appendChild(weatherClass.render());

// добавляем слайдер
const slider = new SliderView();

if (root) {
  root.appendChild(header);
  root.appendChild(videoSliderWrapper);
  root.appendChild(info);
  root.appendChild(slider.render());
}

console.log(slider.imgPreviews);
const logicSlider = new LogicSlider(videoSliders, videoCollectionsRender, slider.imgPreviews);
logicSlider.start();

slider.imgPrev.onclick = () => logicSlider.shiftSlide(1, '');
slider.imgNext.onclick = () => logicSlider.shiftSlide(-1, '');
videoSliders.onmousedown = logicSlider.dragStart;
videoSliders.ontransitionend = logicSlider.checkIndex;

// общая функия по работе со слайдером
//(slider.imgPrev, slider.imgNext, videoSliders, videoCollectionsRender)

// [+] видео вставляется на весь экран приложения
// [+] аудио плеер вставляется на страницу в своём месте

// [ ] слшком короткие звуки выходят попробовать поискать по длиньше
