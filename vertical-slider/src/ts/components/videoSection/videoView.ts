const videoView = (src: string): HTMLDivElement => {
  const videoWrapper = document.createElement('div');
  videoWrapper.classList.add('video__slider');

  const video = document.createElement('video');
  video.classList.add('video__slider-item');
  video.src = src;
  video.loop = true;
  video.muted = true;
  video.preload = 'auto';
  video.playsInline = true;
  video.autoplay = true;
  videoWrapper.appendChild(video);

  return videoWrapper;
};

export { videoView };
