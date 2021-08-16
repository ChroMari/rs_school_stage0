const title = (): HTMLElement => {
  const h1 = document.createElement('h1');
  h1.classList.add('header__title');
  h1.textContent = 'Photo filter';

  return h1;
};

export { title };
