import '../../../styles/modal.sass';

const modalView = (): void => {
  const { body } = document;

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalDialog = document.createElement('div');
  modalDialog.classList.add('modal-dialog');
  modal.appendChild(modalDialog);

  const content = document.createElement('div');
  content.classList.add('modal-content');
  modalDialog.appendChild(content);

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  content.appendChild(modalHeader);

  const modalHeaderTitle = document.createElement('h3');
  modalHeaderTitle.textContent = 'Vertical Slider';
  modalHeaderTitle.classList.add('modal-title');
  modalHeader.appendChild(modalHeaderTitle);

  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = '×';
  button.classList.add('close');
  modalHeader.appendChild(button);

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  content.appendChild(modalBody);

  modalBody.innerHTML += `<div class="modal-item">
  <h5>Базовый функционал приложения:</h5>
  <p>[+10] При нажатии на стрелку вправо или влево происходит сдвиг слайда вверх или в противоположную сторону вниз.</p>
</div>
<div class="modal-item">
  <h5>Обязательный дополнительный фукционал:</h5>
  <p>[+10] Сделать слайдер бесконечным (зацикленным) когда после последнего слайда следующим идёт первый, а при перелистывании в обратную сторону, после первого слайда следующим идёт последний</p>
</div>
<div class="modal-item">
  <h5>Дополнительный функционал на выбор:</h5>
  <p>[+10] Пролистывание слайдера не только кликами по стрелкам, но и свайпами мышки</p>
  <p>Перелистывание слайдера по средствам нажатия на превью картинки</p>
  <p>[+10] Для каждого слайдера присутсвует свой кастомный плеер. При помощи данного плеера можно воспроизводить звуки и регулировать громкость. Также по нажатию на кнопку можно отключить звук.</p>
  <p>[+10] при открытии новой темы при перелистыванием слайдера (кликом по кнопке или свайпом) автоматически запускаются все относящиеся к ней аудиоплееры, есть возможность независимо настраивать громкость каждого из них</p>
  <p>Можно получить данные по указанному городу, если данные не найдены происходит появление сообщения об ошибке и данные не обновляются</p>
  <p>последняя выбранная пользователем тема и указанный пользователем город, для которого отображается прогноз погоды, сохраняются при перезагрузке страницы</p>
  <p>при клике по кнопке Fullscreen можно развернуть во весь экран слайд с видео, при этом боковая панель и сама кнопка Fullscreen скрывается</p>
  <p>есть прелоадер, который отображается во время загрузки приложения</p>
</div>`;

  const buttonClose = document.createElement('button');
  buttonClose.classList.add('button-open', 'weather__button');
  buttonClose.textContent = 'Самоценка';

  buttonClose.onclick = () => {
    if (modal.parentNode === body) body.removeChild(modal);
    else body.appendChild(modal);
  };

  button.onclick = () => {
    body.removeChild(modal);
  };

  if (body) body.appendChild(buttonClose);
};

export { modalView };
