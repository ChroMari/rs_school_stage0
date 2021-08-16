import '../../../styles/filter.sass';

const filter = (): HTMLElement => {
  const filter = document.createElement('section');
  filter.classList.add('filter');

  const titleInner = document.createElement('div');
  titleInner.classList.add('filter-inner');
  filter.appendChild(titleInner);

  return filter;
};

export { filter };
