import { DownlandButton } from './DownlandButton';
import { NextButton } from './NextButton';
import { SaveButton } from './SaveButton';
import { title } from './title';

const headerView = (body: HTMLElement): HTMLElement => {
  const header = document.createElement('header');
  header.classList.add('header');

  const innerButton = document.createElement('div');
  innerButton.classList.add('header-inner');
  header.appendChild(innerButton);

  const headerDownlandClass = new DownlandButton(body); // кнопка для загрузки изображения
  const headerSaveClass = new SaveButton(); // кнопка для скачивания изображения
  const headerNextCLass = new NextButton(body); // кнопка для переключения на следующую картинку

  innerButton.appendChild(headerDownlandClass.render());
  innerButton.appendChild(headerSaveClass.render());

  header.appendChild(title());

  header.appendChild(headerNextCLass.render());

  return header;
};

export { headerView };
