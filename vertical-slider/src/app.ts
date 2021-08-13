import './styles/style.sass';
import { HeaderWrapper } from './ts/components/headerSection/HeaderWrapper';
import { VideoWrapper } from './ts/components/videoSection/VideoWrapper';
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

class LogicSoundsApp {
  indexActiveVideo: number;

  headerView: HTMLHeadElement;

  videoView: HTMLElement;

  constructor() {
    this.indexActiveVideo = !localStorage.getItem('active')
      ? 0
      : Number(localStorage.getItem('active'));

    this.headerView = document.createElement('header');
    this.videoView = document.createElement('section');
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
  }
}

const SoundsApp = new LogicSoundsApp();
SoundsApp.render();

if (root) {
  root.appendChild(SoundsApp.headerView);
  root.appendChild(SoundsApp.videoView);
}
