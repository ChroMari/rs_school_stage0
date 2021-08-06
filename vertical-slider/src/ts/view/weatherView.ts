import windSrc from '../../assets/svg/wind.svg';

class WeatherView {
  url: string;

  userCity: string | null;

  KEY: string;

  weatherDb: Object;

  constructor() {
    this.userCity = 'Moscow';
    this.KEY = 'e57c98f149763a48dfe1dc5f0325fe2c';
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.userCity}&appid=${this.KEY}&lang=ru`;
    this.weatherDb = {};
  }

  async getWeather(): Promise<Object> {
    const response = await fetch(this.url);
    const get = await response.json();
    console.log(get);
    return get;
  }

  toTextualDescription(degree: number) {
    const sectors = [
      'Northerly',
      'North Easterly',
      'Easterly',
      'South Easterly',
      'Southerly',
      'South Westerly',
      'Westerly',
      'North Westerly',
    ];

    degree += 22.5;

    if (degree < 0) degree = 360 - (Math.abs(degree) % 360);
    else degree %= 360;

    const which = parseInt(String(degree / 45));
    return sectors[which];
  }

  renderView() {
    this.weatherDb = this.getWeather().then((res) => (this.weatherDb = res));
    console.log(this.weatherDb);
    //this.weatherDb = this.getWeather().then(response => response.json());
    //this.weatherDb = responce.json();
    const wrapperInfo = document.createElement('div');
    wrapperInfo.classList.add('weather-wrapper', 'weather-wrapper-info');

    const divleft = document.createElement('div');
    wrapperInfo.appendChild(divleft);

    const imgLeft = document.createElement('img');
    imgLeft.src = `http://openweathermap.org/img/w/${this.weatherDb.weather[0].icon}.png`;
    divleft.appendChild(imgLeft);

    const pLeft = document.createElement('p');
    pLeft.textContent = `${this.weatherDb.main.temp}°C`;
    divleft.appendChild(pLeft);

    const ppLeft = document.createElement('p');
    ppLeft.textContent = this.weatherDb.weather[0].description;
    divleft.appendChild(ppLeft);

    const divRight = document.createElement('div');
    wrapperInfo.appendChild(divRight);

    const imgRight = document.createElement('img');
    imgRight.src = windSrc;
    divRight.appendChild(imgRight);
    console.log(this.weatherDb);

    const pRight = document.createElement('p');
    pRight.textContent = `${this.weatherDb.wind.speed}m/s`;
    divRight.appendChild(pRight);

    const ppRight = document.createElement('p');
    ppRight.textContent = this.toTextualDescription(this.weatherDb.wind.deg);
    divRight.appendChild(ppRight);

    return wrapperInfo;
  }

  render(): HTMLElement {
    const weatherBody = document.createElement('div'); //+
    weatherBody.classList.add('song', 'weather');
    // weatherBody.innerHTML = this.getWeather();

    const wrapperSearch = document.createElement('div');
    wrapperSearch.classList.add('weather-wrapper');
    weatherBody.appendChild(wrapperSearch);

    const title = document.createElement('h4');
    title.classList.add('song__title', 'wheater__title');

    title.textContent = this.userCity; // берёт город по умолчанию или из локального хранилища
    wrapperSearch.appendChild(title);

    const buttonSearch = document.createElement('button');
    buttonSearch.classList.add('wheater__button');
    buttonSearch.textContent = 'Сменить локацию';
    wrapperSearch.appendChild(buttonSearch);

    weatherBody.appendChild(this.renderView());

    /*this.getWeather().then((t) => {
      this.weatherDb = t;
      weatherBody.appendChild(this.renderView(t));
    });*/

    return weatherBody;
  }
}

export { WeatherView };
