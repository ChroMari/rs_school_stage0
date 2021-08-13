import { sliderButton } from './sliderButton';
import { sliderImg } from './sliderImg';

import '../../../styles/slider.sass';

class SliderWrapper {
  indexActiveVideo: number;

  imgLinks: Array<string>;

  imgViews: Array<HTMLImageElement>;

  buttonPrev: HTMLButtonElement;

  buttonNext: HTMLButtonElement;

  constructor(indexActiveVideo: number, imgLinks: Array<string>) {
    this.indexActiveVideo = indexActiveVideo;
    this.imgLinks = imgLinks;

    this.imgViews = []; // массив, где хранятся все рендерные картинки

    this.buttonPrev = document.createElement('button'); // кнопка прошлого слайда
    this.buttonNext = document.createElement('button'); // кнопка следующего слайда
  }

  render(): HTMLElement {
    const sliderWrapper = document.createElement('section');
    sliderWrapper.classList.add('slider');

    sliderWrapper.appendChild(sliderButton(this.buttonPrev, ''));

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');
    sliderWrapper.appendChild(sliderContainer);

    this.imgLinks.forEach((src, index) => {
      this.imgViews.push(sliderImg(src));
      sliderContainer.appendChild(this.imgViews[index]);
    });

    this.imgViews[this.indexActiveVideo].classList.add('slider__item--active');

    sliderWrapper.appendChild(sliderButton(this.buttonNext, 'slider__button--next'));

    return sliderWrapper;
  }
}

export { SliderWrapper };

/**
 * slider - главная обёртка (this.indexActiveVideo)
 * slider__button - кнопка для переключения слайдера
 * slider__button--next - дополнительный класс, чтобы повернуть кнопку
 * slider-container - обёртка для всех картинок
 * slider__item - каждая картинка
 * slider__item--active - выбранная картинка в данный момент
 */
