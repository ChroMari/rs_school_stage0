import { WeatherControls } from '../weather/WeatherControls';
import '../../styles/weather.sass';

class WeatherView {
  userCity: string;

  constructor() {
    this.userCity = 'Moscow';
  }

  render(): HTMLElement {
    if (localStorage.getItem('cityName')) this.userCity = localStorage.getItem('cityName') || '';

    const weatherBody = document.createElement('div'); //+
    weatherBody.classList.add('information-card');

    const wrapperSearch = document.createElement('div');
    wrapperSearch.classList.add('weather__search-wrapper'); //+
    weatherBody.appendChild(wrapperSearch);

    const div = document.createElement('div');

    const title = document.createElement('input');
    title.classList.add('weather__search-input'); // +
    title.type = 'text';

    wrapperSearch.appendChild(div);
    div.appendChild(title);

    const buttonSearch = document.createElement('button');
    buttonSearch.classList.add('weather__search-button'); // +
    buttonSearch.textContent = 'Search';
    div.appendChild(buttonSearch);

    const er = document.createElement('p'); // +
    er.classList.add('weather__search-error');
    wrapperSearch.appendChild(er);

    const weatherInfo = new WeatherControls();
    weatherBody.appendChild(weatherInfo.render());
    weatherInfo.getWeather(this.userCity, title, er);

    buttonSearch.onclick = () => weatherInfo.getWeather(title.value, title, er);

    return weatherBody;
  }
}

export { WeatherView };
