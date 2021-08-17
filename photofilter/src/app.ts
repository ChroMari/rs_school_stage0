import './styles/header.sass';
import './styles/style.sass';
import { CanvasWrapper } from './ts/components/canvasSection/CanvasWrapper';
import { SelectedWrapper } from './ts/components/canvasSection/selectedWrapper';
import { FilterWrapper } from './ts/components/filterSection/FilterWrapper';
import { headerView } from './ts/components/headerSection/header';
import { modalView } from './ts/modalSection';

const root = document.getElementById('root');
const { body } = document;

modalView();

const canvasClass = new CanvasWrapper();

const contentWrapper = document.createElement('div');
contentWrapper.classList.add('content-wrapper');

const filterWrapperClass = new FilterWrapper(canvasClass.filtering);
contentWrapper.appendChild(filterWrapperClass.render());

const selectedWrapper = new SelectedWrapper(filterWrapperClass.filters);

filterWrapperClass.buttonReset.onclick = () => {
  filterWrapperClass.filters.map((filterItem) => filterItem.resetCount());
  selectedWrapper.activeSelect(0, selectedWrapper.filterRenders);
};

const headerWrapper = headerView(body, canvasClass.drawing, canvasClass.save, selectedWrapper.selectedArrays);

const drawingWrapper = document.createElement('div');
drawingWrapper.classList.add('drawing-wrapper');
contentWrapper.appendChild(drawingWrapper);

drawingWrapper.appendChild(canvasClass.render());
drawingWrapper.appendChild(selectedWrapper.render());

if (root) {
  root.appendChild(headerWrapper);
  root.appendChild(contentWrapper);
}
