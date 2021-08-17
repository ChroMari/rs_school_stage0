class SelectedItem {
  select: HTMLElement;

  title: string;

  filterCanvas: string;

  canvas: HTMLCanvasElement;

  constructor(name: string, filter: Array<string>) {
    this.select = document.createElement('div');
    this.title = name;
    this.filterCanvas = filter.join(' ');

    this.canvas = document.createElement('canvas');
  }

  renderFilterCanvas = (img: HTMLImageElement): void => {
    const ctx = this.canvas.getContext('2d');
    this.canvas.width = img.width;
    this.canvas.height = img.height;
    if (ctx) {
      ctx.filter = this.filterCanvas;
      ctx.drawImage(img, 0, 0);
    }
  };

  render = (): HTMLElement => {
    this.select.classList.add('selected-item');

    const wrapperCanvas = document.createElement('div');
    wrapperCanvas.classList.add('selected-item__canvas');
    this.select.appendChild(wrapperCanvas);

    wrapperCanvas.appendChild(this.canvas);

    const titleSelect = document.createElement('h4');
    titleSelect.classList.add('selected-item__title');
    titleSelect.textContent = this.title;
    this.select.appendChild(titleSelect);

    return this.select;
  };
}

export { SelectedItem };
