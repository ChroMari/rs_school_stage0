import src from '../assets/spinner.gif';
import '../styles/preloader.sass';

const preloader = (): void => {
  const { body } = document;

  const div = document.createElement('div');
  div.classList.add('preloader');

  const preloadImg = document.createElement('img');
  preloadImg.src = src;
  preloadImg.alt = 'preloader';
  div.appendChild(preloadImg);

  if (body) body.appendChild(div);

  window.onload = () => {
    div.classList.add('hide-preloader');
    setInterval(() => {
      div.classList.add('preloader-hidden');
    }, 990);
  };
};

export { preloader };
