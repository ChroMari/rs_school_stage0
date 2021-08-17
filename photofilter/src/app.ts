import './styles/header.sass';
import './styles/style.sass';
import { CanvasWrapper } from './ts/components/canvasSection/CanvasWrapper';
import { FilterWrapper } from './ts/components/filterSection/FilterWrapper';
import { headerView } from './ts/components/headerSection/header';
/**
 * header
 *  header-inner - обёртка для двух кнопок
 *    header__input - поле для активации загрузки изображения
 *    header__button-load - кнопка для загрузки изображения с компьютера
 *    header__button-save - кнопка для сохранения изображения на компьютер
 *  header__title - название приложения
 *  header__button-next - кнопка для включения следующей страницы
 */

/**
 * content-wrapper - общий контейнер для основной части
 */

/**
 * filter - общая секция со всеми фильтрами, которые могут применяться к фото
 * filter-inner - общий контейнер для заголовка фильтра и сброса данных
 *
 *    filter-inner__title - название фильтра h3
 *    filter-inner__button - кнопка для сброса фильтров в изначальное положение
 * aside
 *     filter__subtitle - название текущего фильтра
 *     filter__input - бешунок, который служит для выставления зачения фильтра
 *
 * нужно будет сделать готовые пресеты по которым и работать
 *
 * если мы выбираем маленький какой-то из канвасов, то он должен повлиять и на большой и на фильтеры и на название фильтров
 * select's -> canvas.canvas, filter.name, filterArrays
 */

// filter(canvas.draw) -> ResetButton(filterArrays, canvas.draw)
//           ItemFilter(canvas.draw)

/**
 * drawing-wrapper - контейнер для основного канваса и пресетов
 */

/**
 * canvas - главная обёртка для канваса
 */

/**
 *
 */

const root = document.getElementById('root');
const { body } = document;

const canvasClass = new CanvasWrapper();

// header нужно будет в этом месте объявить
const headerWrapper = headerView(body, canvasClass.drawing, canvasClass.save);

const contentWrapper = document.createElement('div');
contentWrapper.classList.add('content-wrapper');

const filterWrapperClass = new FilterWrapper(canvasClass.filtering); // canvas.draw
contentWrapper.appendChild(filterWrapperClass.render());

const drawingWrapper = document.createElement('div'); //
drawingWrapper.classList.add('drawing-wrapper');
contentWrapper.appendChild(drawingWrapper);

drawingWrapper.appendChild(canvasClass.render());

if (root) {
  root.appendChild(headerWrapper); // canvas.canvas, canvas.draw, select-canvas.draw
  root.appendChild(contentWrapper);
}

// canvas -> canvas.draw
// select-canvas -> select-canvas.draw

// header(body, canvas.draw, select-canvas.draw) -> DownlandButton(body, canvas.draw, select-canvas.draw)
//                                                        -> SaveButton(canvas.draw) +
//                                                        -> NextButton(body, canvas.draw, select-canvas.draw)
