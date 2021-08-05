import imgSrcNoFullscreen from '../../assets/svg/no_fullscreen.svg';
import imgSrcFullscreen from '../../assets/svg/fullsreen.svg';

/**
 * Fullscreen нужно передавать video обязательно сюда
 */

class FullscreenBtn {
  video: HTMLAudioElement;

  constructor(video: HTMLAudioElement) {
    this.video = video;
  }

  toggleFull(img: HTMLImageElement) {
    const oldImg = img;
    if (!document.fullscreenElement) {
      this.video.requestFullscreen();
      oldImg.src = imgSrcNoFullscreen;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        oldImg.src = imgSrcFullscreen;
      }
    }
  }

  onDocumentFullscreen(img: HTMLImageElement) {
    const oldImg = img;
    if (!document.fullscreenElement) oldImg.src = imgSrcFullscreen;
  }

  render() {
    // нужен контейнер для видео чтобы не показывалась полоса управления видео

    const img = document.createElement('img');
    img.classList.add('header__img');
    img.alt = 'открыть или закрыть полноэкранный режим';
    img.src = imgSrcFullscreen;
    img.onclick = () => this.toggleFull(img);

    document.addEventListener('fullscreenchange', () => this.onDocumentFullscreen(img));

    return img;
  }
}

export { FullscreenBtn };
