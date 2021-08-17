import '../styles/modal.sass';

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
  modalHeaderTitle.textContent = 'photofilter';
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
  <p>[+10] Есть возможность выбрать значение для фильтра по средствам сдвига бегунка.</p>
</div>
<div class="modal-item">
  <h5>Обязательный дополнительный фукционал:</h5>
  <p>[+10] Есть присеты для фотографии. При выборе миниатюры пресета такие же фильтры применяются к основному фото</p>
</div>
<div class="modal-item">
  <h5>Дополнительный функционал на выбор:</h5>
  <p>[+10] перелистывание фото</p>
  <p>[+10] загрузка в приложение фото с компьютера</p>
  <p>[+10] сохранение фото на компьютер вместе с наложенными фильтрами</p>
  <p>[+10] сброс фильтров кликом на кнопку</p>
  <p>возможность открыть приложение в полноэкранном режиме</p>
  
</div>`;

  const buttonClose = document.createElement('button');
  buttonClose.classList.add('button-open');
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
