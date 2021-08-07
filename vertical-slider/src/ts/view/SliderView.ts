import srcImg from '../../assets/svg/left.svg';

import img1 from '../../assets/img/beach.jpg';
import img2 from '../../assets/img/forest.jpg';
import img3 from '../../assets/img/night.jpg';

class SliderView {
  imgPrev: HTMLImageElement;

  imgNext: HTMLImageElement;

  constructor() {
    this.imgPrev = document.createElement('img');
    this.imgNext = document.createElement('img');
  }

  render(): HTMLElement {
    const div = document.createElement('section');
    div.classList.add('slider');

    this.imgPrev.classList.add('slider__btn');
    this.imgPrev.src = srcImg;
    this.imgPrev.alt = 'включить прошлый слайд';
    div.appendChild(this.imgPrev);

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('preview');
    div.appendChild(sliderContainer);

    for (let i = 0; i < 6; i++) {
      const img = document.createElement('img');
      img.classList.add('thumbnail');
      if (i === 0) img.classList.add('active');
      img.src = img1;
      sliderContainer.appendChild(img);
    }

    this.imgNext.classList.add('slider__btn', 'slider__btn--next');
    this.imgNext.src = srcImg;
    this.imgNext.alt = 'включить следующий слайд';
    div.appendChild(this.imgNext);

    // получается, когда пользователь нажимаает нам нужно сделать сдвиг нынешнего и одновременно следующего
    // то есть на данный момент нам сюда нажо передать класс с видео
    // у нас будет доступ к массиву класссов, внутри кторого можно обратиться к видео
    // логику переключения кнопок лучше вынести в app так как нужно будет менять и сами плееры
    // либо прееры тащить тоже в этот класс

    /*<div class="slider">
    <img class="slider__btn" src="<%=require('./assets/svg/left.svg')%>" alt="prev arrow">

    <div class="preview">
      <img src="<%=require('./assets/img/beach.jpg')%>" alt="" class="active thumbnail">
      <img src="<%=require('./assets/img/forest.jpg')%>" alt="" class="thumbnail">
      <img src="<%=require('./assets/img/night.jpg')%>" alt="" class="thumbnail">
      <img src="<%=require('./assets/img/beach.jpg')%>" alt="" class="thumbnail">
      <img src="<%=require('./assets/img/forest.jpg')%>" alt="" class="thumbnail">
    </div>
    <img class="slider__btn slider__btn--next" src="<%=require('./assets/svg/left.svg')%>" alt="next arrow">
  </div>*/

    return div;
  }
}

export { SliderView };
