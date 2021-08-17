import { filterInput } from '../../database/normalFilters';
import '../../../styles/filter.sass';
import { FilterItem } from './FilterItem';
import { filterTitle } from './filterTitle';

class FilterWrapper {
  title: HTMLElement;

  filters: Array<FilterItem>;

  filteringCanvas: CallbackFunctionVariadic;

  constructor(filtering: CallbackFunctionVariadic) {
    this.title = document.createElement('h2');
    this.filters = [];
    this.filteringCanvas = filtering;
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

      const filterItemClass = new FilterItem(
        min,
        max,
        value,
        typeFilter,
        unit,
        this.filteringCanvas,
      );
      this.filters.push(filterItemClass);

      filter.appendChild(this.filters[index].render());
    });

    const filterButton = document.createElement('button');
    filterButton.classList.add('filter-inner__button');
    filterButton.textContent = 'Reset';

    filterButton.onclick = () => {
      this.filters.map((filterItem) => filterItem.resetCount());
      this.title.textContent = 'Filter - Normal';
    };

    titleInner.appendChild(filterButton);

    return filter;
  };
}

export { FilterWrapper };

type CallbackFunctionVariadic = (...args: string[]) => void;
