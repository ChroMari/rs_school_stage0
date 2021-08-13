import { logicImgClick } from './logicImgClick';

class LogicSliders {
  posX1: number;

  posX2: number;

  threshold: number;

  allowShift: boolean;

  index: number;

  videoViews: Array<HTMLDivElement>;

  videoContainer: HTMLDivElement;

  posInitialVideo: number;

  posFinalVideo: number;

  imgViews: Array<HTMLImageElement>;

  constructor(
    indexActiveVideo: number,
    videoViews: Array<HTMLDivElement>,
    videoContainer: HTMLDivElement,
    imgViews: Array<HTMLImageElement>,
  ) {
    this.posX1 = 0;
    this.posX2 = 0;
    this.threshold = 100;
    this.index = indexActiveVideo;
    this.allowShift = true;

    this.posInitialVideo = 0;
    this.posFinalVideo = 0;

    this.videoViews = videoViews;
    this.videoContainer = videoContainer;

    this.imgViews = imgViews;
  }

  dragAction = (e: MouseEvent): void => {
    this.posX2 = this.posX1 - e.clientY;
    this.posX1 = e.clientY;
    this.videoContainer.style.top = `${this.videoContainer.offsetTop - this.posX2}px`;
  };

  dragEnd = (): void => {
    this.posFinalVideo = this.videoContainer.offsetTop;
    if (this.posFinalVideo - this.posInitialVideo < -this.threshold) this.shiftSlide(1, 'drag');
    else if (this.posFinalVideo - this.posInitialVideo > this.threshold)
      this.shiftSlide(-1, 'drag');
    else this.videoContainer.style.top = `${this.posInitialVideo}px`;

    document.onmouseup = null;
    document.onmousemove = null;
  };

  shiftSlide = (dir: number, action: string): void => {
    this.videoContainer.classList.add('shifting');
    this.imgViews.forEach((img) => img.classList.remove('slider__item--active'));

    if (this.allowShift) {
      if (!action) this.posInitialVideo = this.videoContainer.offsetTop;

      if (dir === 1) {
        this.videoContainer.style.top = `${
          this.posInitialVideo - this.videoViews[0].offsetHeight
        }px`;
        this.index += 1;
      } else if (dir === -1) {
        this.videoContainer.style.top = `${
          this.posInitialVideo + this.videoViews[0].offsetHeight
        }px`;
        this.index -= 1;
      }

      if (this.index === -1)
        this.imgViews[this.imgViews.length - 1].classList.add('slider__item--active');
      else if (this.index === this.imgViews.length)
        this.imgViews[0].classList.add('slider__item--active');
      else this.imgViews[this.index].classList.add('slider__item--active');
    }
    this.allowShift = false;
  };

  dragStart = (e: MouseEvent): void => {
    e.preventDefault();
    this.posInitialVideo = this.videoContainer.offsetTop;
    this.posX1 = e.clientY;
    document.onmouseup = this.dragEnd;
    document.onmousemove = this.dragAction;
  };

  checkIndex = (): void => {
    this.videoContainer.classList.remove('shifting');

    if (this.index === -1) {
      this.videoContainer.style.top = `${-(
        this.videoViews.length * this.videoViews[0].offsetHeight
      )}px`;
      this.index = this.videoViews.length - 1;
    }
    if (this.index === this.videoViews.length) {
      this.videoContainer.style.top = `${-(1 * this.videoViews[0].offsetHeight)}px`;
      this.index = 0;
    }
    localStorage.setItem('active', String(this.index));
    this.allowShift = true;
  };

  render(): void {
    const firstSlide = this.videoViews[0];
    const lastSlide = this.videoViews[this.videoViews.length - 1];
    const cloneFirst = firstSlide.cloneNode(true);
    const cloneLast = lastSlide.cloneNode(true);

    this.videoContainer.appendChild(cloneFirst);
    this.videoContainer.insertBefore(cloneLast, firstSlide);
    this.videoContainer.style.top = `${-((this.index + 1) * 500)}px`;

    this.imgViews.forEach((item, index) =>
      item.addEventListener('click', () => {
        this.index = index;
        logicImgClick(this.videoContainer, this.imgViews, this.index);
      }),
    );
  }
}

export { LogicSliders };
