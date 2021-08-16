const filterTitle = (title: HTMLElement): HTMLElement => {
  const titleFilter = title;
  titleFilter.classList.add('filter-inner__title');
  titleFilter.textContent = 'FILTER - Normal';

  return titleFilter;
};

export { filterTitle };
