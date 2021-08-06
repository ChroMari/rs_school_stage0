import '../../styles/video.sass';

class VideoView {
  src: string;

  video: HTMLVideoElement;

  constructor(src: string) {
    this.src = src;
    this.video = document.createElement('video');
  }

  render = (): HTMLDivElement => {
    const containerAudio = document.createElement('div');
    containerAudio.classList.add('container-video');

    this.video.classList.add('container-video__video');
    this.video.src = this.src;
    this.video.loop = true;
    this.video.muted = true;
    this.video.preload = 'auto';
    this.video.playsInline = true;
    this.video.autoplay = true;
    containerAudio.appendChild(this.video);

    return containerAudio;
  };
}

export { VideoView };
