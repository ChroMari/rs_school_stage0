import srcImg from '../../assets/svg/left.svg';

import img1 from '../../assets/img/beach.jpg';
import img2 from '../../assets/img/forest.jpg';
import img3 from '../../assets/img/night.jpg';

class SliderView {
  imgPrev: HTMLImageElement;

  imgNext: HTMLImageElement;
  imgPreviews: Array<HTMLElement>;

  constructor() {
    this.imgPrev = document.createElement('img');
    this.imgNext = document.createElement('img');

    this.imgPreviews = [];
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
      this.imgPreviews.push(img);
      sliderContainer.appendChild(img);
    }

    this.imgNext.classList.add('slider__btn', 'slider__btn--next');
    this.imgNext.src = srcImg;
    this.imgNext.alt = 'включить следующий слайд';
    div.appendChild(this.imgNext);

    return div;
  }
}

export { SliderView };
