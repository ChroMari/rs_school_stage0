class weatherView {
  constructor () {

  }

  render ():HTMLElement {
    const weatherBody = document.createElement('div'); //+
    weatherBody.classList.add('song', 'weather');

    const wrapperSearch = document.createElement('div'); 
    wrapperSearch.classList.add('weather-wrapper');
    weatherBody.appendChild(wrapperSearch);

    const title = document.createElement('h4');
    title.classList.add('song__title', 'wheater__title');
    title.textContent = 'Москва'; // потом нужно будет менять на поиск и локально
    wrapperSearch.appendChild(title);

    const buttonSearch = document.createElement('button');
    buttonSearch.classList.add('wheater__button');
    buttonSearch.textContent = 'Сменить локацию';
    wrapperSearch.appendChild(buttonSearch);

    //отображение полученных данных от запроса
    const wrapperInfo = document.createElement('div');
    wrapperInfo.classList.add('weather-wrapper', 'weather-wrapper-info');

    const divleft = document.createElement('div');

    const img = document.createElement('img');
    divleft.appendChild(img);

    


    return weatherBody;
  };
}

export { weatherView };

/*<div class="song wheater">
            <div class="wheater-wrapper"> 
              <h4 class="song__title wheater__title">Москва</h4>
              <button class="wheater__button">Сменить локацию</button>
            </div>
            

            <div class="wheater-wrapper wheater-wrapper-info">
              <div>
                <img src="<%=require('./assets/svg/play.svg')%>" alt="">
                <p>23 градуса</p>
                <p>переменная облачность</p>
              </div>
              <div>
                <img src="<%=require('./assets/svg/play.svg')%>" alt="">
                <p>27 м/с</p>
              </div>
            </div>
          </div>*/