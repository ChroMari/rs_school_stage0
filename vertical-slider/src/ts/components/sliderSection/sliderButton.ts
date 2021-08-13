const sliderButton = (button: HTMLButtonElement, classes: string): HTMLButtonElement => {
  const item = button;
  item.classList.add('slider__button');
  item.type = 'button';

  const svg = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g>
  <path fill="#fff" d="m232.248 154.599-21.213-21.213-122.615 122.614 122.615 122.614 
  21.213-21.213-41.402-41.401h212.433v-120h-212.433zm141.031 71.401v60h-212.432l-30-30 30-30z"/></g></svg>`;
  item.innerHTML = svg;

  if (classes.length !== 0) item.classList.add(classes);

  return item;
};

export { sliderButton };
