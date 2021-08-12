import srcImg from '../../assets/svg/left.svg';

class SliderView {
  imgPrev: HTMLImageElement;

  imgNext: HTMLImageElement;

  imgPreviews: Array<HTMLElement>;

  imgSliders: Array<IimgSlider>;

  constructor(imgSlider: Array<IimgSlider>) {
    this.imgPrev = document.createElement('img');
    this.imgNext = document.createElement('img');

    this.imgPreviews = [];
    this.imgSliders = imgSlider;
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

    this.imgSliders.map((item, index) => {
      const img = document.createElement('img');
      img.classList.add('thumbnail');
      if (index === 0) img.classList.add('active'); // нужно будет потом отсюда убрать, так как подет получать номер из локального хранилища
      img.src = item.src;
      this.imgPreviews.push(img);
      sliderContainer.appendChild(img);
    });

    this.imgNext.classList.add('slider__btn', 'slider__btn--next');
    this.imgNext.src = srcImg;
    this.imgNext.alt = 'включить следующий слайд';
    div.appendChild(this.imgNext);

    return div;
  }
}

export { SliderView };

interface IimgSlider {
  src: string;
}
