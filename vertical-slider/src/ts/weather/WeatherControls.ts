import windSrc from '../../assets/svg/wind.svg';

class WeatherControls {
  KEY: string;

  icon: HTMLImageElement;

  temp: HTMLElement;

  description: HTMLElement;

  speed: HTMLElement;

  deg: HTMLElement;

  constructor() {
    this.KEY = 'e57c98f149763a48dfe1dc5f0325fe2c';

    this.icon = document.createElement('img');
    this.temp = document.createElement('p');
    this.description = document.createElement('p');
    this.speed = document.createElement('p');
    this.deg = document.createElement('p');
  }

  async getWeather(city: string, title: HTMLInputElement, er: HTMLElement): Promise<void> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.KEY}&lang=en`;
    try {
      const response = await fetch(url);
      const get = await response.json();

      this.icon.src = `http://openweathermap.org/img/w/${get.weather[0].icon}.png`;
      this.temp.textContent = `${get.main.temp}F`;
      this.description.textContent = get.weather[0].description;
      this.speed.textContent = `${get.wind.speed}m/s`;
      this.deg.textContent = this.toTextualDescription(get.wind.deg);
      title.value = city;
      localStorage.setItem('cityName', city);

      er.textContent = '';
      er.classList.remove('weather__search-error--active');
    } catch (err) {
      er.textContent = 'Error: City not find';
      er.classList.add('weather__search-error--active');
    }
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

  render(): HTMLElement {
    const wrapperInfo = document.createElement('div');
    wrapperInfo.classList.add('weather__information');

    const divleft = document.createElement('div');
    divleft.classList.add('weather__information-card');
    wrapperInfo.appendChild(divleft);

    divleft.appendChild(this.icon);
    divleft.appendChild(this.temp);
    divleft.appendChild(this.description);

    const divRight = document.createElement('div');
    divRight.classList.add('weather__information-card');
    wrapperInfo.appendChild(divRight);

    const imgRight = document.createElement('img');
    imgRight.src = windSrc;
    divRight.appendChild(imgRight);

    divRight.appendChild(this.speed);
    divRight.appendChild(this.deg);

    return wrapperInfo;
  }
}

export { WeatherControls };
