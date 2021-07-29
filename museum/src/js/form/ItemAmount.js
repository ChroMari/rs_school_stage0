class ItemAmount {
  constructor (amountSectionItems, text, cost) {
    this.amountSectionItems = amountSectionItems;
    this.text = text;
    this.cost = cost;
  }

  back (value) {
    if (Number(value) - 1 > 0) {
      return Number(value) - 1;
    }
    return 0;
  }

  next (value) {
    if (Number(value) + 1 < 100) {
      return Number(value) + 1;
    }
    return 100;
  }
  
  render () {
    const li = document.createElement('li');
    li.classList.add('form-amount__item');
    this.amountSectionItems.appendChild(li);

    const label = document.createElement('label');
    label.classList.add('form-amount__text');
    li.appendChild(label);

    const span = document.createElement('span');
    span.textContent = this.text;
    label.appendChild(span);

    const divContainer = document.createElement('div');
    divContainer.classList.add('form__button-container');
    label.appendChild(divContainer);

    const buttonBack = document.createElement('button');
    buttonBack.classList.add('form-amount__button');
    buttonBack.type = 'button';
    buttonBack.textContent = '-';
    divContainer.appendChild(buttonBack);

    const input = document.createElement('input');
    input.classList.add('form-amount__number');
    input.type = 'number';
    input.min = '0';
    input.max = '100';
    input.setAttribute('value', '1');
    input.readOnly = 'true';
    input.setAttribute('cost', this.cost);
    divContainer.appendChild(input);

    const buttonNext = document.createElement('button');
    buttonNext.classList.add('form-amount__button');
    buttonNext.textContent = '+';
    buttonNext.type = 'button';
    divContainer.appendChild(buttonNext);

    buttonBack.onclick = () => input.value = this.back(input.value);
    buttonNext.onclick = () => input.value = this.next(input.value);

    return input;
  }
};

export default ItemAmount;