import imgSrcFullscreen from '../../assets/svg/fullsreen.svg';

class FullscreenBtn {
  video: HTMLDivElement;

  constructor(video: HTMLDivElement) {
    this.video = video;
  }

  toggleFull = (): void => {
    if (!document.fullscreenElement) this.video.requestFullscreen();
    else if (document.exitFullscreen) document.exitFullscreen();
  };

  render(): HTMLImageElement {
    const img = document.createElement('img');
    img.classList.add('header__img');
    img.alt = 'открыть полноэкранный режим';
    img.src = imgSrcFullscreen;
    img.onclick = this.toggleFull;

    return img;
  }
}

export { FullscreenBtn };
