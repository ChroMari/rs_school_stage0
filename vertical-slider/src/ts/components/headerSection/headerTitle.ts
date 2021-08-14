import '../../../styles/header.sass';

const headerTitle = (): HTMLElement => {
  const h1 = document.createElement('h1');
  h1.classList.add('header__title');
  h1.textContent = 'Slider-SoundsApp';

  return h1;
};

export { headerTitle };
