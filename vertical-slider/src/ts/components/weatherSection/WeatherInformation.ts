import srcWind from '../../../assets/svg/wind.svg';
import { parserDeg } from './parserDeg';

class WeatherInformation {
  imgWeather: HTMLImageElement;

  temp: HTMLElement;

  description: HTMLElement;

  speed: HTMLElement;

  deg: HTMLElement;

  constructor() {
    this.imgWeather = document.createElement('img');
    this.temp = document.createElement('p');
    this.description = document.createElement('p');
    this.speed = document.createElement('p');
    this.deg = document.createElement('p');
  }

  async requestWeather(input: HTMLInputElement, text: HTMLElement): Promise<void> {
    const textError = text;
    const KEY = 'e57c98f149763a48dfe1dc5f0325fe2c';
    const city = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&lang=en`;

    try {
      const response = await fetch(url);
      const get = await response.json();

      this.imgWeather.src = `http://openweathermap.org/img/w/${get.weather[0].icon}.png`;
      this.temp.textContent = `${get.main.temp}F`;
      this.description.textContent = get.weather[0].description;
      this.speed.textContent = `${get.wind.speed}m/s`;
      this.deg.textContent = parserDeg(get.wind.deg);

      localStorage.setItem('cityName', city);

      textError.textContent = '';
      textError.classList.remove('weather__text--active');
    } catch (err) {
      textError.textContent = 'Error: City not find';
      textError.classList.add('weather__text--active');
    }
  }

  render(): HTMLElement {
    const wrapper = document.createElement('div');
    wrapper.classList.add('weather-wrapper');

    const card = document.createElement('div');
    card.classList.add('weather-card');
    wrapper.appendChild(card);

    this.imgWeather.classList.add('weather-card__img');
    card.appendChild(this.imgWeather);
    this.temp.classList.add('weather-card__text');
    card.appendChild(this.temp);
    this.description.classList.add('weather-card__text');
    card.appendChild(this.description);

    const card2 = document.createElement('div');
    card2.classList.add('weather-card');
    wrapper.appendChild(card2);

    const imgWind = document.createElement('img');
    imgWind.classList.add('weather-card__img');
    imgWind.alt = 'wind';
    imgWind.src = srcWind;
    card2.appendChild(imgWind);
    this.speed.classList.add('weather-card__text');
    card2.appendChild(this.speed);
    this.deg.classList.add('weather-card__text');
    card2.appendChild(this.deg);

    return wrapper;
  }
}

export { WeatherInformation };
