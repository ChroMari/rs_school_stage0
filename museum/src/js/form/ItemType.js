class ItemType {
  constructor (typeSectionItems, text, cost) {
    this.typeSectionItems = typeSectionItems;
    this.text = text;
    this.cost = cost;
  }

  render () {
    const li = document.createElement('li');
    li.classList.add('form-type__item');
    this.typeSectionItems.appendChild(li);

    const label = document.createElement('label');
    label.classList.add('form-type__text', 'form-radio');
    li.appendChild(label);

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'radio';
    input.value = this.text;
    input.setAttribute('cost', this.cost);
    label.appendChild(input);

    const span = document.createElement('span');
    span.classList.add('form-radio__indicator');
    label.appendChild(span);

    const text = document.createElement('span');
    text.textContent = this.text;
    label.appendChild(text);

    return input;
  }
};

export default ItemType;