class VideoView {
  src: string;

  constructor(src: string) {
    this.src = src;
  }

  render = (): HTMLElement => {
    const video = document.createElement('video'); // <video src="" preload="auto" loop></video>
    video.classList.add('video');
    video.src = this.src;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true; //  запускает само видео

    return video;
  };
}

export { VideoView };
