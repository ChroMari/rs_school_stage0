// массив объявить со всеми номерами из папок для картинок НУЖЕН КОПИ ПЛАГИН ИСПОЛЬЗОВАТЬ ДЛЯ ЭТОГО ПЛЮСОМ

class NextButton {
  index: number;
  img: HTMLImageElement;
  body: HTMLElement;

  constructor(body: HTMLElement) {
    this.index = 1;
    this.img = new Image();
    this.body = body;
  }

  nextImage = (): void => {
    if (this.index + 1 === 21) this.index = 1;

    const date = new Date();
    const interval = ['night', 'morning', 'day', 'evening'];
    const indexUrl = this.index < 10 ? `0${this.index}` : `${this.index}`;
    const intervalNow = interval[Math.floor(date.getHours() / 6)];
    const url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${intervalNow}/${indexUrl}.jpg`;

    this.img.src = url;
    this.img.onload = () => {
      this.body.style.backgroundImage = `url(${this.img.src})`;
    };
    this.index += 1;
  };

  render = (): HTMLButtonElement => {
    const button = document.createElement('button');
    button.classList.add('header__button-next', 'header__button');
    button.textContent = 'Next picture';
    button.onclick = this.nextImage;

    return button;
  };
}

export { NextButton };
