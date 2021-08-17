import filterStyles from '../../database/stylesSelected';
import { SelectedItem } from './SelectedItem';

import '../../../styles/selected.sass';
import { FilterItem } from '../filterSection/FilterItem';

class SelectedWrapper {
  selectedArrays: Array<SelectedItem>;

  filters: Array<FilterItem>;

  filterRenders: Array<HTMLElement>;

  constructor(filters: Array<FilterItem>) {
    this.selectedArrays = [];
    this.filters = filters;
    this.filterRenders = [];
  }

  activeSelect = (index: number, filterRenders: Array<HTMLElement>): void => {
    filterRenders.map((item) => item.classList.remove('selected-item--active'));
    const filter = this.selectedArrays[index].filterCanvas.split(' ');
    filter.forEach((value, indx) => {
      const newValue = parseInt(value.replace(/[^\d]/g, ''), 10);
      this.filters[indx].input.value = String(newValue);
      this.filters[indx].newCount();
    });
    filterRenders[index].classList.add('selected-item--active');
  };

  render = (): HTMLElement => {
    const selected = document.createElement('div');
    selected.classList.add('selected-wrapper');

    filterStyles.map((style, index) => {
      const { name, filter } = style;
      this.selectedArrays.push(new SelectedItem(name, filter));
      this.filterRenders.push(this.selectedArrays[index].render());
      selected.appendChild(this.filterRenders[index]);
      return style;
    });

    this.filterRenders[0].classList.add('selected-item--active');

    this.filterRenders.forEach((item, index) => {
      item.addEventListener('click', () => this.activeSelect(index, this.filterRenders));
    });

    return selected;
  };
}

export { SelectedWrapper };
