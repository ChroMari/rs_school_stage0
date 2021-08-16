import { filterInput } from '../../database/normalFilters';
import '../../../styles/filter.sass';
import { FilterItem } from './FilterItem';
import { filterTitle } from './filterTitle';

class FilterWrapper {
  title: HTMLElement;

  filters: Array<FilterItem>;

  constructor() {
    this.title = document.createElement('h2');
    this.filters = []; // массив, который содержит все классы фильтров
    // для каждого фильтра в классе нужно будет отметить эталонный сброс по параметрам
  }

  render = (): HTMLElement => {
    const filter = document.createElement('section');
    filter.classList.add('filter');

    const titleInner = document.createElement('div');
    titleInner.classList.add('filter-inner');
    filter.appendChild(titleInner);

    this.title = filterTitle(this.title);
    titleInner.appendChild(this.title);

    filterInput.forEach((filterItem, index) => {
      const { min, max, value, typeFilter, unit } = filterItem;

      const filterItemClass = new FilterItem(min, max, value, typeFilter, unit);
      this.filters.push(filterItemClass);

      filter.appendChild(this.filters[index].render());
    });

    // сделать кнопку для сброса стилей
    const filterButton = document.createElement('button');
    filterButton.classList.add('filter-inner__button');
    filterButton.textContent = 'Reset';

    filterButton.onclick = () => {
      this.filters.map((filterItem) => filterItem.resetCount());
      this.title.textContent = 'Filter - Normal';
    };

    // filter-inner__button -> filterArrays

    return filter;
  };
}

export { FilterWrapper };
