import { FullscreenButton } from './FullscreenButton';
import { headerTitle } from './headerTitle';

class HeaderWrapper {
  videoViews: Array<HTMLDivElement>;

  indexActiveVideo: number;

  constructor(videoViews: Array<HTMLDivElement>, indexActiveVideo: number) {
    this.videoViews = videoViews;
    this.indexActiveVideo = indexActiveVideo;
  }

  render(): HTMLHeadElement {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = headerTitle();
    header.appendChild(title);

    const button = new FullscreenButton(this.videoViews, this.indexActiveVideo);
    header.appendChild(button.render());

    return header;
  }
}

export { HeaderWrapper };
