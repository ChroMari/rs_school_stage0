import { filtersCanvas, IfilterCanvas } from '../../database/filtersCanvas';
import '../../../styles/canvas.sass';

class CanvasWrapper {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D | null;

  img: HTMLImageElement;

  filtersCanvas: IfilterCanvas;

  resultFiltersCanvas: string;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.img = new Image();
    this.filtersCanvas = filtersCanvas;
    this.resultFiltersCanvas = '';
  }

  filtering = (titleFilter: string, valueFilter: string, unitFilter: string): void => {
    const title = titleFilter.toLowerCase().replace(' ', '_');
    this.filtersCanvas[title] = `(${valueFilter}${unitFilter})`;
    this.resultFiltersCanvas = '';
    const keys = Object.keys(this.filtersCanvas);
    keys.map((key) => {
      this.resultFiltersCanvas += `${key.replace('_', '-')}${this.filtersCanvas[key]} `;
      return key;
    });

    this.resultFiltersCanvas = this.resultFiltersCanvas.trim();
    if (this.ctx) this.ctx.filter = this.resultFiltersCanvas;
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx?.drawImage(this.img, 0, 0);
  };

  save = (): void => {
    const a = document.createElement('a'); // проверить на gh скачиваются ли потом изображения
    a.href = this.canvas.toDataURL(this.img.src);
    a.download = 'image.png';
    a.click();
  };

  drawing = (img: HTMLImageElement): void => {
    this.img.src = img.src;
    this.img.setAttribute('crossOrigin', 'anonymous');
    this.canvas.width = img.width;
    this.canvas.height = img.height;

    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.resultFiltersCanvas.length !== 0 && this.ctx)
      this.ctx.filter = this.resultFiltersCanvas;
    this.ctx?.drawImage(img, 0, 0);
  };

  render = (): HTMLCanvasElement => this.canvas;
}

export { CanvasWrapper };
