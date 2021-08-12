import { VideoView } from './ts/view/VideoView';
import { links } from './ts/db/links';
import { SongView } from './ts/view/SongView';

import './styles/style.sass';
import './styles/information.sass';
import { WeatherView } from './ts/view/weatherView';
import { headerView } from './ts/view/header';
import { SliderView } from './ts/view/SliderView';
import { LogicSlider } from './ts/slider/logic';
import { imgSlider } from './ts/db/img_slider';

const root = document.getElementById('root');

const info = document.createElement('div'); // общий контейнер с информацией
info.classList.add('information');

const videoSliderWrapper = document.createElement('div');
videoSliderWrapper.classList.add('video-slider__wrapper');

const videoSliders = document.createElement('div');
videoSliders.classList.add('video-slider__sliders');
videoSliderWrapper.appendChild(videoSliders);

/* -обертка для музыки со слайдером-*/
const sectionSong = document.createElement('section');
sectionSong.classList.add('song-wrapper');

const songSlider = document.createElement('div');
songSlider.classList.add('song-slider__sliders');
sectionSong.appendChild(songSlider);

const videoCollections: Array<VideoView> = [];
const videoCollectionsRender: Array<HTMLDivElement> = [];

const songCollections: Array<SongView> = [];
let songCollectionsRender: Array<HTMLElement> = [];
links.map((item, indx) => {
  videoCollections.push(new VideoView(item.srcVideo));
  videoCollectionsRender.push(videoCollections[indx].render());
  videoSliders.appendChild(videoCollectionsRender[indx]);
  //  массив с классами в количестве 6 различных тем

  songCollections.push(
    new SongView(item.srcFirstSong, item.textFirstSong, item.srcSecondSong, item.textSecondSong), // отсюда надо вытянуть mp3
  );
  songCollectionsRender.push(songCollections[indx].render());
  // songSlider.appendChild(songCollectionsRender[indx]); // получаем все элементы музыки для каждого видео
  // массив с музыкой в количестве 6 различных тем

  return item;
});

// меняем порядок для элементов на противоположный
songCollectionsRender = songCollectionsRender.reverse();
songCollectionsRender.map((item) => songSlider.appendChild(item));

const header = headerView(videoCollectionsRender[0]); // тут также нужно будет передать файл в зависимотси от локального хранилища

info.appendChild(sectionSong);

//  добавление виджета с погодой
const weatherClass = new WeatherView();
info.appendChild(weatherClass.render());

// добавляем слайдер
const slider = new SliderView(imgSlider);

if (root) {
  root.appendChild(header);
  root.appendChild(videoSliderWrapper);
  root.appendChild(info);
  root.appendChild(slider.render());
}

const logicSlider = new LogicSlider(
  videoSliders,
  videoCollectionsRender,
  slider.imgPreviews,
  songSlider,
  songCollectionsRender,
);
logicSlider.start();

slider.imgPrev.onclick = () => logicSlider.shiftSlide(1, '');
slider.imgNext.onclick = () => logicSlider.shiftSlide(-1, '');
videoSliders.onmousedown = logicSlider.dragStart;
videoSliders.ontransitionend = logicSlider.checkIndex;
