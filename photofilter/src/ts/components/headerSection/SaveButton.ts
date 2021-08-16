class SaveButton {
  constructor() {}

  save = (): void => {
    const href = ''; //this.canvas.toDataURL();
    const a = document.createElement('a');
    a.href = href;
    a.download = 'image.png';
    a.click();
  };

  render = (): HTMLButtonElement => {
    const button = document.createElement('button');
    button.classList.add('header__button-save', 'header__button');
    button.textContent = 'Save picture';

    button.onclick = this.save;

    return button;
  };
}

export { SaveButton };
