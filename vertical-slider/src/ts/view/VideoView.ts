class VideoView {
  src: string;

  constructor(src: string) {
    this.src = src;
  }

  render = (): HTMLElement => {
    const video = document.createElement('video'); // <video src="" preload="auto" loop></video>
    video.classList.add('video');
    video.src = this.src;
    video.loop = true; // Циклическое воспроизведение видеофайла.
    video.muted = true;
    video.preload = 'auto'; // auto — браузер загружает видеофайл полностью, чтобы он был доступен, когда пользователь начнет его воспроизведение.

    video.autoplay = true; // Автоматическое воспроизведение видеоофайла сразу же после загрузки страницы.
    video.playsInline = true; //  запускает само видео

    return video;
  };
}

export { VideoView };
