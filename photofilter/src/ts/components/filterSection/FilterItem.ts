class FilterItem {
  min: number;

  max: number;

  value: number;

  title: string;

  unit: string;

  labelCount: HTMLElement;

  state: number;

  constructor(min: number, max: number, value: number, title: string, unit: string) {
    this.min = min;
    this.max = max;
    this.value = value;
    this.title = title;
    this.unit = unit;

    this.labelCount = document.createElement('span');
    this.state = value;
  }

  newCount = (value: string): void => {
    this.labelCount.textContent = String(value);
    // вызываем фильтр с новыми занчениями для канваса
  };

  resetCount = (): void => {
    // кнопка для сброса стилей
    this.labelCount.textContent = String(this.state);
    // сбросить название фильтра до базового
  };

  render = (): HTMLElement => {
    const item = document.createElement('aside');

    const label = document.createElement('label');
    label.classList.add('filter__subtitle');
    label.setAttribute('for', this.title.replace(' ', ''));
    item.appendChild(label);

    const labelTitle = document.createElement('span');
    labelTitle.textContent = this.title;
    label.appendChild(labelTitle);

    this.labelCount.textContent = String(this.value);
    label.appendChild(this.labelCount);

    const input = document.createElement('input');
    input.classList.add('filter__input');
    input.id = this.title.replace(' ', '');
    input.type = 'range';
    input.min = String(this.min);
    input.max = String(this.max);
    input.value = String(this.value);
    item.appendChild(input);

    let isFlagMouse = false;
    input.onchange = () => this.newCount(input.value);
    input.onmousedown = () => {
      isFlagMouse = true;
    };
    input.onmousemove = () => isFlagMouse && this.newCount(input.value);
    input.onmouseout = () => {
      isFlagMouse = false;
    };

    return item;
  };
}

export { FilterItem };
