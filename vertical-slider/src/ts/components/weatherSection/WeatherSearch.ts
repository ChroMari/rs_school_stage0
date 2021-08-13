class WeatherSearch {
  city: string;

  input: HTMLInputElement;

  button: HTMLButtonElement;

  text: HTMLElement;

  constructor() {
    this.city = !localStorage.getItem('city') ? 'Minsk' : String(localStorage.getItem('city'));

    this.input = document.createElement('input');
    this.button = document.createElement('button');
    this.text = document.createElement('p');
  }

  render(): HTMLElement {
    const divSearch = document.createElement('div');

    const divWrapperSearch = document.createElement('div');
    this.input.type = 'text';
    this.input.classList.add('weather__input');
    this.input.value = this.city;
    divWrapperSearch.appendChild(this.input);

    this.button.classList.add('weather__button');
    this.button.textContent = 'Search';
    divWrapperSearch.appendChild(this.button);

    divSearch.appendChild(divWrapperSearch);

    this.text.classList.add('weather__text');
    divSearch.appendChild(this.text);

    return divSearch;
  }
}

export { WeatherSearch };
