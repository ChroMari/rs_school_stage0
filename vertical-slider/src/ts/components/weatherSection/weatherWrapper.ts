import { WeatherSearch } from './WeatherSearch';

import '../../../styles/weather.sass';
import { WeatherInformation } from './WeatherInformation';

const weatherWrapper = (): HTMLElement => {
  const weather = document.createElement('section');
  weather.classList.add('weather');

  const search = new WeatherSearch();
  weather.appendChild(search.render());

  const information = new WeatherInformation();
  weather.appendChild(information.render());

  search.button.onclick = () => information.requestWeather(search.input, search.text);

  information.requestWeather(search.input, search.text);
  return weather;
};

export { weatherWrapper };
