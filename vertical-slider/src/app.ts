import './styles/style.sass';
import { HeaderWrapper } from './ts/components/headerSection/HeaderWrapper';
import { SliderWrapper } from './ts/components/sliderSection/SliderWrapper';
import { VideoWrapper } from './ts/components/videoSection/VideoWrapper';
import { imgLinks } from './ts/database/img_slider';
import { srcVideo } from './ts/database/video_links';

const root = document.getElementById('root');

/**
 * header - главная обёртка
 * header__title - просто заголовок для приложения
 * header__button - кнопка, которая включает full режим (сюда нужно передать div_video, которое
 *  отражает выбранное сейчас видео
 *                  как вариант передать массив с видео только. Но откуда брать index)
 */

/**
 * video - главная обёртка
 * video-sliders - в нём хранятся все видео после рендера
 * video__slider - div в котором будет находиться видео
 */

/**
 * slider - главная обёртка (this.indexActiveVideo)
 * slider__button - кнопка для переключения слайдера
 * slider-container - обёртка для всех картинок
 * slider__item - каждая картинка
 * slider__item--active - выбранная картинка в данный момент
 */

class LogicSoundsApp {
  indexActiveVideo: number;

  headerView: HTMLHeadElement;

  videoView: HTMLElement;

  sliderView: HTMLElement;

  constructor() {
    this.indexActiveVideo = !localStorage.getItem('active')
      ? 0
      : Number(localStorage.getItem('active'));

    this.headerView = document.createElement('header');
    this.videoView = document.createElement('section');
    this.sliderView = document.createElement('section');
  }

  render() {
    const videoClass = new VideoWrapper(srcVideo); // +
    this.videoView = videoClass.render();
    /**
     * videoClass.videoViews - массив со всеми отрендеренными изображениями
     * videoClass.container - узел, в котором находятся все элементы слайдера
     */
    const headerClass = new HeaderWrapper(videoClass.videoViews, this.indexActiveVideo); // +
    this.headerView = headerClass.render();

    const sliderClass = new SliderWrapper(this.indexActiveVideo, imgLinks);
    this.sliderView = sliderClass.render();
    /**
     * sliderClass.imgViews - массив со всеми отрисованными слайдами
     * sliderClass.buttonPrev - кнопка для включения предыдущего слайда
     * sliderClass.buttonNext - кнопка следующего слайда
     */

    // const informationInner = document.createElement('div'); // обретка для двух секций
  }
}

const SoundsApp = new LogicSoundsApp();
SoundsApp.render();

if (root) {
  root.appendChild(SoundsApp.headerView);
  root.appendChild(SoundsApp.videoView);
  root.appendChild(SoundsApp.sliderView);
}
