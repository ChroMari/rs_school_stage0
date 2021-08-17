class SaveButton {
  a: HTMLAnchorElement;

  saveCanvas: CallbackFunction;

  constructor(saveCanvas: CallbackFunction) {
    this.a = document.createElement('a');
    this.saveCanvas = saveCanvas;
  }

  save = (): void => this.saveCanvas();

  render = (): HTMLButtonElement => {
    const button = document.createElement('button');
    button.classList.add('header__button-save', 'header__button');
    button.textContent = 'Save picture';

    button.onclick = this.save;

    return button;
  };
}

export { SaveButton };

type CallbackFunction = () => void;
