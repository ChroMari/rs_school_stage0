import './styles/header.sass';
import './styles/style.sass';
import { filter } from './ts/components/filterSection/filter';
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

// filter -> ResetButton(filterArrays, canvas.canvas)
//           ItemFilter(canvas.canvas)

const root = document.getElementById('root');
const { body } = document;

const contentWrapper = document.createElement('div');
contentWrapper.classList.add('content-wrapper'); // +

contentWrapper.appendChild(filter());

if (root) {
  root.appendChild(headerView(body));
  root.appendChild(contentWrapper);
}

// canvas -> canvas.draw
// select-canvas -> select-canvas.draw

// header(canvas.canvas, canvas.draw, select-canvas.draw) -> DownlandButton(body, canvas.draw, select-canvas.draw)
//                                                        -> SaveButton(this.canvas)
//                                                        -> NextButton(body, canvas.draw, select-canvas.draw)
