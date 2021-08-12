class LogicSlider {
  posX1: number;
  posX2: number;
  posInitial: number;
  posFinal: number;
  threshold: number;
  index: number;
  allowShift: boolean;

  posInitialSong: number;
  posFinalSong: number;

  videoSliders: HTMLElement;
  videoCollectionsRender: Array<HTMLDivElement>;
  imgPreviews: Array<HTMLElement>;
  songCollectionsRender: Array<HTMLElement>;
  songSlider: HTMLElement;
  constructor(
    videoSliders: HTMLElement,
    videoCollectionsRender: Array<HTMLDivElement>,
    imgPreviews: Array<HTMLElement>,
    songSlider: HTMLElement,
    songCollectionsRender: Array<HTMLElement>,
  ) {
    this.posX1 = 0;
    this.posX2 = 0;
    this.threshold = 100;
    this.index = 0;
    this.allowShift = true;

    this.videoSliders = videoSliders;
    this.videoCollectionsRender = videoCollectionsRender;

    this.posInitial = 0;
    this.posFinal = 0;

    this.posInitialSong = 0;
    this.posFinalSong = 0;

    this.imgPreviews = imgPreviews;
    this.songCollectionsRender = songCollectionsRender;
    this.songSlider = songSlider;
  }

  dragAction = (e: MouseEvent) => {
    this.posX2 = this.posX1 - e.clientY;
    this.posX1 = e.clientY;
    this.videoSliders.style.top = `${this.videoSliders.offsetTop - this.posX2}px`;
  };

  dragEnd = () => {
    this.posFinal = this.videoSliders.offsetTop;
    this.posFinalSong = this.songSlider.offsetTop;
    if (this.posFinal - this.posInitial < -this.threshold) this.shiftSlide(1, 'drag');
    else if (this.posFinal - this.posInitial > this.threshold) this.shiftSlide(-1, 'drag');
    else this.videoSliders.style.top = `${this.posInitial}px`;

    document.onmouseup = null;
    document.onmousemove = null;
  };

  shiftSlide = (dir: number, action: string) => {
    this.videoSliders.classList.add('shifting');
    this.songSlider.classList.add('shifting');
    this.imgPreviews.map((item) => item.classList.remove('active'));

    if (this.allowShift) {
      if (!action) {
        this.posInitial = this.videoSliders.offsetTop;
        this.posInitialSong = this.songSlider.offsetTop - 20;
      }
      if (dir === 1) {
        this.videoSliders.style.top = `${
          this.posInitial - this.videoCollectionsRender[0].offsetHeight
        }px`;

        this.songSlider.style.bottom = `${
          -1 * this.posInitialSong - this.songCollectionsRender[0].offsetHeight
        }px`;
        this.index++;
      } else if (dir === -1) {
        this.videoSliders.style.top = `${
          this.posInitial + this.videoCollectionsRender[0].offsetHeight
        }px`;

        this.songSlider.style.bottom = `${
          -1 * this.posInitialSong + this.songCollectionsRender[0].offsetHeight
        }px`;
        this.index--;
      }

      if (this.index == -1)
        this.imgPreviews[this.videoCollectionsRender.length - 1].classList.add('active');
      else if (this.index == this.videoCollectionsRender.length)
        this.imgPreviews[0].classList.add('active');
      else this.imgPreviews[this.index].classList.add('active');
    }
    this.allowShift = false;
  };

  dragStart = (e: MouseEvent) => {
    e.preventDefault();
    this.posInitial = this.videoSliders.offsetTop;
    this.posInitialSong = this.songSlider.offsetTop - 20;
    this.posX1 = e.clientY;
    document.onmouseup = this.dragEnd;
    document.onmousemove = (e) => this.dragAction(e);
  };

  checkIndex = () => {
    this.videoSliders.classList.remove('shifting');
    this.songSlider.classList.remove('shifting');

    if (this.index == -1) {
      this.videoSliders.style.top = `${-(
        this.videoCollectionsRender.length * this.videoCollectionsRender[0].offsetHeight
      )}px`;

      this.songSlider.style.bottom = `${this.songCollectionsRender[0].offsetHeight}px`;
      this.index = this.videoCollectionsRender.length - 1;
    }
    if (this.index === this.videoCollectionsRender.length) {
      this.videoSliders.style.top = `${-(1 * this.videoCollectionsRender[0].offsetHeight)}px`;

      this.songSlider.style.bottom = `${
        this.videoCollectionsRender.length * this.songCollectionsRender[0].offsetHeight
      }px`;
      this.index = 0;
    }
    this.allowShift = true;
  };

  shiftPoint = (index: number) => {
    this.videoSliders.classList.add('shifting');
    this.imgPreviews.map((item) => item.classList.remove('active'));

    this.videoSliders.style.top = `${-(
      this.videoCollectionsRender[0].offsetHeight +
      index * this.videoCollectionsRender[0].offsetHeight
    )}px`;

    this.songSlider.classList.add('shifting');
    this.songSlider.style.bottom = `${
      this.songCollectionsRender[0].offsetHeight * this.songCollectionsRender.length -
      index * this.songCollectionsRender[0].offsetHeight
    }px`;

    this.index = index;

    if (this.index == -1)
      this.imgPreviews[this.videoCollectionsRender.length - 1].classList.add('active');
    else if (this.index == this.videoCollectionsRender.length)
      this.imgPreviews[0].classList.add('active');
    else this.imgPreviews[this.index].classList.add('active');
  };

  start = () => {
    let firstSlide = this.videoCollectionsRender[0];
    let lastSlide = this.videoCollectionsRender[this.videoCollectionsRender.length - 1];
    let cloneFirst = firstSlide.cloneNode(true);
    let cloneLast = lastSlide.cloneNode(true);

    this.videoSliders.appendChild(cloneFirst);
    this.videoSliders.insertBefore(cloneLast, firstSlide);

    let firstSlideSong = this.songCollectionsRender[0];
    let lastSlideSong = this.songCollectionsRender[this.songCollectionsRender.length - 1];
    let cloneFirstSong = firstSlideSong.cloneNode(true);
    let cloneLastSong = lastSlideSong.cloneNode(true);

    this.songSlider.appendChild(cloneFirstSong);
    this.songSlider.insertBefore(cloneLastSong, firstSlideSong);

    this.imgPreviews.forEach((item, index) =>
      item.addEventListener('click', () => {
        this.shiftPoint(index);
      }),
    );
  };
}

export { LogicSlider };
