const logicImgClick = (
  video: HTMLDivElement,
  imgViews: Array<HTMLElement>,
  index: number,
  song: HTMLElement,
): void => {
  const videoContainer = video;
  const songContainer = song;
  videoContainer.classList.add('shifting');
  songContainer.classList.add('shifting');
  imgViews.map((img) => img.classList.remove('slider__item--active'));

  videoContainer.style.top = `${-(500 + index * 500)}px`;
  songContainer.style.top = `${-(220 + index * 220)}px`;

  if (index === -1) imgViews[imgViews.length - 1].classList.add('slider__item--active');
  else if (index === imgViews.length) imgViews[0].classList.add('slider__item--active');
  else imgViews[index].classList.add('slider__item--active');
};

export { logicImgClick };
