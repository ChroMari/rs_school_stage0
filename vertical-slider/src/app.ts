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
    new SongView(item.srcFirstSong, item.textFirstSong, item.srcSecondSong, item.textSecondSong)
  );
  // массив с музыкой в количестве 6 различных тем

  return item;
});

const header = headerView(videoCollectionsRender[0]);

info.appendChild(songCollections[0].render());

//  добавление виджета с погодой
const weatherClass = new WeatherView();
info.appendChild(weatherClass.render());

/*---------------------------------------*/

let posX1 = 0;
let posX2 = 0;
let posInitial = 0;
let posFinal;
let threshold = 100;
let firstSlide = videoCollectionsRender[0];
let lastSlide = videoCollectionsRender[videoCollectionsRender.length - 1];
let cloneFirst = firstSlide.cloneNode(true);
let cloneLast = lastSlide.cloneNode(true);
let index = 0;
let allowShift = true;

videoSliders.appendChild(cloneFirst);
videoSliders.insertBefore(cloneLast, firstSlide);

const dragAction = (e: MouseEvent) => {
  posX2 = posX1 - e.clientX;
  posX1 = e.clientX;
  videoSliders.style.left = videoSliders.offsetLeft - posX2 + 'px';
};

const dragEnd = () => {
  posFinal = videoSliders.offsetLeft;
  if (posFinal - posInitial < -threshold) shiftSlide(1, 'drag');
  else if (posFinal - posInitial > threshold) shiftSlide(-1, 'drag');
  else videoSliders.style.left = posInitial + 'px';

  document.onmouseup = null;
  document.onmousemove = null;
};

const shiftSlide = (dir: number, action: string) => {
  videoSliders.classList.add('shifting');
  if (allowShift) {
    if (!action) posInitial = videoSliders.offsetLeft;
    if (dir === 1) {
      videoSliders.style.left = posInitial - videoCollectionsRender[0].offsetWidth + 'px';
      index++;
    } else if (dir === -1) {
      videoSliders.style.left = posInitial + videoCollectionsRender[0].offsetWidth + 'px';
      index--;
    }
  }

  allowShift = false;
};

const dragStart = (e: MouseEvent) => {
  e.preventDefault();
  posInitial = videoSliders.offsetLeft;

  posX1 = e.clientX;
  document.onmouseup = dragEnd;
  document.onmousemove = dragAction;
};

const checkIndex = () => {
  videoSliders.classList.remove('shifting');

  if (index == -1) {
    videoSliders.style.left =
      -(videoCollectionsRender.length * videoCollectionsRender[0].offsetWidth) + 'px';
    index = videoCollectionsRender.length - 1;
  }

  if (index === videoCollectionsRender.length) {
    videoSliders.style.left = -(1 * 900) + 'px';
    index = 0;
  }

  allowShift = true;
};

videoSliders.onmousedown = dragStart;

/*----------------------------------------*/

// добавляем слайдер
const slider = new SliderView();
slider.imgPrev.onclick = () => shiftSlide(1, '');
slider.imgNext.onclick = () => shiftSlide(-1, '');
videoSliders.ontransitionend = checkIndex;

if (root) {
  root.appendChild(header);
  root.appendChild(videoSliderWrapper);
  root.appendChild(info);
  root.appendChild(slider.render());
}

// [+] видео вставляется на весь экран приложения
// [+] аудио плеер вставляется на страницу в своём месте

// [ ] слшком короткие звуки выходят попробовать поискать по длиньше
