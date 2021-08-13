class FullscreenButton {
  videoViews: Array<HTMLDivElement>;

  indexActiveVideo: number;

  constructor(videoViews: Array<HTMLDivElement>, indexActiveVideo: number) {
    this.videoViews = videoViews;
    this.indexActiveVideo = indexActiveVideo;
  }

  openFullscreenMode = (): void => {
    const activeVideo = this.videoViews[this.indexActiveVideo];
    if (!document.fullscreenElement) activeVideo.requestFullscreen();
    else if (document.exitFullscreen) document.exitFullscreen();
  };

  render(): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('header__button');

    const svg = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.48 31.6299H23.05V35.8599H35.7001V23.1499H31.48V31.6299Z" fill="#B3B3B3"/>
    <path d="M4.22 23.1499H0V35.8599H12.65V31.6299H4.22V23.1499Z" fill="#B3B3B3"/>
    <path d="M0 12.71H4.22V4.24H12.65V0H0V12.71Z" fill="#B3B3B3"/>
    <path d="M23.05 0V4.24H31.48V12.71H35.7001V0H23.05Z" fill="#B3B3B3"/>
    </svg>`;
    button.innerHTML = svg;

    button.onclick = this.openFullscreenMode;

    return button;
  }
}

export { FullscreenButton };
