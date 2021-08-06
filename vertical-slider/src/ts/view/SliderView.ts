import srcImg from '../../assets/svg/left.svg';

import img1 from '../../assets/img/beach.jpg';
import img2 from '../../assets/img/forest.jpg';
import img3 from '../../assets/img/night.jpg';

class SliderView {
  constructor() {}

  render(): HTMLElement {
    const div = document.createElement('section');
    div.classList.add('slider');

    const imgPrev = document.createElement('img');
    imgPrev.classList.add('slider__btn');
    imgPrev.src = srcImg;
    imgPrev.alt = 'включить прошлый слайд';
    div.appendChild(imgPrev);

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

    const imgNext = document.createElement('img');
    imgNext.classList.add('slider__btn', 'slider__btn--next');
    imgNext.src = srcImg;
    imgNext.alt = 'включить следующий слайд';
    div.appendChild(imgNext);

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
