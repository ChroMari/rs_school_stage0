class DownlandButton {
  body: HTMLElement;

  drawingCanvas: CallbackFunctionDrawing;

  constructor(body: HTMLElement, drawingCanvas: CallbackFunctionDrawing) {
    this.body = body;
    this.drawingCanvas = drawingCanvas;
  }

  downland = (input: HTMLInputElement): void => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = document.createElement('img');
      img.src = String(reader.result);
      this.body.style.backgroundImage = `url(${img.src})`;
      img.onload = () => this.drawingCanvas(img);
    };
    if (input.files) reader.readAsDataURL(input.files[0]);
  };

  render = (): HTMLLabelElement => {
    const label = document.createElement('label');
    label.classList.add('header__button-load', 'header__button');

    const input = document.createElement('input');
    input.classList.add('header__input');
    input.type = 'file';
    label.appendChild(input);

    label.onchange = () => this.downland(input);

    const span = document.createElement('span');
    span.textContent = 'Load picture';
    label.appendChild(span);

    return label;
  };
}

export { DownlandButton };

type CallbackFunctionDrawing = (...args: HTMLImageElement[]) => void;
