import { DownlandButton } from './DownlandButton';
import { NextButton } from './NextButton';
import { SaveButton } from './SaveButton';
import { title } from './title';

const headerView = (
  body: HTMLElement,
  drawingCanvas: CallbackFunctionDrawing,
  saveCanvas: CallbackFunction,
): HTMLElement => {
  const header = document.createElement('header');
  header.classList.add('header');

  const innerButton = document.createElement('div');
  innerButton.classList.add('header-inner');
  header.appendChild(innerButton);

  const headerDownlandClass = new DownlandButton(body, drawingCanvas); // кнопка для загрузки изображения
  const headerSaveClass = new SaveButton(saveCanvas); // кнопка для скачивания изображения
  const headerNextCLass = new NextButton(body, drawingCanvas); // кнопка для переключения на следующую картинку

  headerNextCLass.nextImage();

  innerButton.appendChild(headerDownlandClass.render());
  innerButton.appendChild(headerSaveClass.render());

  header.appendChild(title());

  header.appendChild(headerNextCLass.render());

  return header;
};

export { headerView };

type CallbackFunction = () => void;
type CallbackFunctionDrawing = (...args: HTMLImageElement[]) => void;
