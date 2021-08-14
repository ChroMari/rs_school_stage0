import { HeaderWrapper } from './components/headerSection/HeaderWrapper';
import { PlayersSlider } from './components/playerSection/Playersslider';
import { SliderWrapper } from './components/sliderSection/SliderWrapper';
import { VideoWrapper } from './components/videoSection/VideoWrapper';
import { weatherWrapper } from './components/weatherSection/weatherWrapper';
import { imgLinks } from './database/img_slider';
import { srcVideo } from './database/video_links';
import { LogicSliders } from './logic/LogisSliders';

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

  render = (): void => {
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

    const playerSongClass = new PlayersSlider();
    this.informationInner.appendChild(playerSongClass.render());
    /**
     * playerSongClass.playerVies - массив, в котором лежат все слайды
     * playerSongClass.playerMp3s - массив со всеми аудио, чтобы ставить их на паузу и запускать
     * playerSongClass..containerSong - контейнер, где лежат все видео
     */

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

      playerSongClass.playerVies,
      playerSongClass.playerMp3s,
      playerSongClass.containerSong,
    );
    logicSliderClass.render();

    sliderClass.buttonNext.onclick = () => logicSliderClass.shiftSlide(1, '');
    sliderClass.buttonPrev.onclick = () => logicSliderClass.shiftSlide(-1, '');

    videoClass.container.onmousedown = logicSliderClass.dragStart;
    videoClass.container.ontransitionend = logicSliderClass.checkIndex;
  };
}

export { SoundsApp };
