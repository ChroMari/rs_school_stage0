import '../../../styles/video.sass';
import { videoView } from './videoView';

class VideoWrapper {
  videoLinks: Array<string>;

  videoViews: Array<HTMLDivElement>;

  container: HTMLDivElement;

  constructor(videoLinks: Array<string>) {
    this.videoLinks = videoLinks;
    this.videoViews = [];
    this.container = document.createElement('div');
  }

  render(): HTMLElement {
    const section = document.createElement('section');
    section.classList.add('video');

    this.container.classList.add('video-sliders');
    section.appendChild(this.container);

    this.videoLinks.forEach((src, index) => {
      this.videoViews.push(videoView(src));
      this.container.appendChild(this.videoViews[index]);
    });

    return section;
  }
}

export { VideoWrapper };

/**
 * video - главная обёртка
 * video-sliders - в нём хранятся все видео после рендера
 * video__slider - div в котором будет находиться видео
 * video__slider-item - video
 * */
