class SaveButton {
  a: HTMLAnchorElement;

  constructor() {
    this.a = document.createElement('a');
  }

  save = (): void => {
    const href = ''; // this.canvas.toDataURL();
    this.a.href = href;
    this.a.download = 'image.png';
    this.a.click();
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
