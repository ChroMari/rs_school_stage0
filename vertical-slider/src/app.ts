import './styles/style.sass';
import { HeaderWrapper } from './ts/components/headerSection/HeaderWrapper';
import { SliderWrapper } from './ts/components/sliderSection/SliderWrapper';
import { VideoWrapper } from './ts/components/videoSection/VideoWrapper';
import { weatherWrapper } from './ts/components/weatherSection/weatherWrapper';
import { imgLinks } from './ts/database/img_slider';
import { srcVideo } from './ts/database/video_links';
import { LogicSliders } from './ts/logic/LogisSliders';

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

/**
 * weather - главная обёртка для секции с погодой
 * div
 *  div
 *    weather__input - поле для заполнения и отправки данных на поиск
 *    weather__button - кнопка для отправа запроса на получение данных о погоде
 *  weather__text - поле с предупреждением, что по запросу не было данных
 *
 * weather-wrapper - обёртка для поля с информацией
 * weather-card - колонка с информацией
 *  img weather-card__img
 *  p weather-card__text
 *  p weather-card__text
 */

class SoundsApp {
  indexActiveVideo: number;

  headerView: HTMLHeadElement;

  videoView: HTMLElement;

  sliderView: HTMLElement;

  informationInner: HTMLElement;

  constructor() {
    this.indexActiveVideo = !localStorage.getItem('active')
      ? 0
      : Number(localStorage.getItem('active'));

    this.headerView = document.createElement('header');
    this.videoView = document.createElement('section');
    this.sliderView = document.createElement('section');
    this.informationInner = document.createElement('div');
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

    this.informationInner.classList.add('content');

    // погода
    const weather = weatherWrapper();
    this.informationInner.appendChild(weather);

    /* -Работа слайдера-*/
    // this.indexActiveVideo, videoClass.videoViews, videoClass.container, sliderClass.imgViews
    const logicSliderClass = new LogicSliders(
      this.indexActiveVideo,
      videoClass.videoViews,
      videoClass.container,
      sliderClass.imgViews,
    );
    logicSliderClass.render();

    sliderClass.buttonNext.onclick = () => logicSliderClass.shiftSlide(1, '');
    sliderClass.buttonPrev.onclick = () => logicSliderClass.shiftSlide(-1, '');

    videoClass.container.onmousedown = logicSliderClass.dragStart;
    videoClass.container.ontransitionend = logicSliderClass.checkIndex;
  }
}

const soundsAppClass = new SoundsApp();
soundsAppClass.render();

if (root) {
  root.appendChild(soundsAppClass.headerView);
  root.appendChild(soundsAppClass.videoView);
  root.appendChild(soundsAppClass.sliderView);
  root.appendChild(soundsAppClass.informationInner);
}
