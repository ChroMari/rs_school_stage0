class FilterItem {
  min: number;

  max: number;

  value: number;

  title: string;

  unit: string;

  labelCount: HTMLElement;

  state: number;

  filteringCanvas: CallbackFunctionVariadic;

  input: HTMLInputElement;

  constructor(min: number, max: number, value: number, title: string, unit: string, filteringCanvas: CallbackFunctionVariadic) {
    this.min = min;
    this.max = max;
    this.value = value;
    this.title = title;
    this.unit = unit;

    this.labelCount = document.createElement('span');
    this.state = value;

    this.filteringCanvas = filteringCanvas;
    this.input = document.createElement('input');
  }

  newCount = (): void => {
    this.labelCount.textContent = this.input.value;
    this.filteringCanvas(this.title, this.input.value, this.unit);
  };

  resetCount = (): void => {
    this.labelCount.textContent = String(this.state);
    this.input.value = String(this.state);
    this.filteringCanvas(this.title, String(this.state), this.unit);
  };

  render = (): HTMLElement => {
    const item = document.createElement('aside');

    const label = document.createElement('label');
    label.classList.add('filter__subtitle');
    label.setAttribute('for', this.title.replace(' ', ''));
    item.appendChild(label);

    const labelTitle = document.createElement('span');
    labelTitle.textContent = this.title.replace('-', ' ');
    label.appendChild(labelTitle);

    this.labelCount.textContent = String(this.value);
    label.appendChild(this.labelCount);

    this.input.classList.add('filter__input');
    this.input.id = this.title.replace(' ', '');
    this.input.type = 'range';
    this.input.min = String(this.min);
    this.input.max = String(this.max);
    this.input.value = String(this.value);
    item.appendChild(this.input);

    let isFlagMouse = false;
    this.input.onchange = this.newCount;
    this.input.onmousedown = () => {
      isFlagMouse = true;
    };
    this.input.onmousemove = () => isFlagMouse && this.newCount();
    this.input.onmouseout = () => {
      isFlagMouse = false;
    };

    return item;
  };
}

export { FilterItem };

type CallbackFunctionVariadic = (...args: string[]) => void;
