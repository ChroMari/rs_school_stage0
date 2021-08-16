class DownlandButton {
  body: HTMLElement;

  constructor(body: HTMLElement) {
    this.body = body;
  }

  downland = (input: HTMLInputElement): void => {
    let file;
    if (input.files) file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = document.createElement('img');
      img.src = String(reader.result);
      this.body.style.backgroundImage = `url(${img.src})`;
    };
    if (file) reader.readAsDataURL(file);
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
