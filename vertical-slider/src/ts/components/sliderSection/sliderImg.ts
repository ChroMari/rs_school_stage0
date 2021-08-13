const sliderImg = (src: string): HTMLImageElement => {
  const img = document.createElement('img');
  img.classList.add('slider__item');
  img.src = src;
  img.alt = 'image';

  return img;
};

export { sliderImg };
