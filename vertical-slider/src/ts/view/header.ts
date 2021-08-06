import { FullscreenBtn } from './FullscreenBtn';

import '../../styles/header.sass';

const headerView = (audio: HTMLDivElement): HTMLElement => {
  const header = document.createElement('header');
  header.classList.add('header');

  const titleHeader = document.createElement('h1');
  titleHeader.classList.add('header__title');
  titleHeader.textContent = 'SoundsApp';
  header.appendChild(titleHeader);

  const fullscreenButton = new FullscreenBtn(audio);
  header.appendChild(fullscreenButton.render());

  return header;
};

export { headerView };
