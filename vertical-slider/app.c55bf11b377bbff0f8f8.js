(()=>{"use strict";var e={4019:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"a8f732b59a5501dfef5b244f73d47dae.mp3"},9753:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"afda38ef15f5ba95c07eb62073408d59.mp3"},2501:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"c95dca871223980b30636724828f8e34.mp3"},7104:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"eed1bd72256696277ace51c7e6ef0235.mp3"},476:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"5bd31d69c3b6f98d41794a914c828ca0.mp3"},2218:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"289cae2a8e1572edf13790af35e0cbbd.mp3"},6082:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"b83703a245eae723b60727b842817698.mp3"},5089:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"73a9b0d5b28f315d5d23d9a2851c053b.mp3"},1740:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"7e2e727c8e7771392e330df9568e9a8a.mp3"},1353:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"14c0ffe8faa137896ddf6767fab7b1b9.mp3"},206:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"419bc64f2d4f415177a083ea5212e4d3.mp3"},7468:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"4e8d9edfa9651bd19a72985aadd11da4.mp3"},9908:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"videos/beach.mp4"},8157:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"videos/butterfly.mp4"},5015:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"videos/fall.mp4"},5977:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"videos/fire.mp4"},9945:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"videos/grass.mp4"},7601:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=i.p+"videos/waterfall.mp4"},9107:(e,t,i)=>{e.exports=i.p+"assets/3afde431bcb9a11f0f80.jpg"},9724:(e,t,i)=>{e.exports=i.p+"assets/c22da34af4adbe9c9c5f.jpeg"},6801:(e,t,i)=>{e.exports=i.p+"assets/423349df217b61055811.jpg"},8154:(e,t,i)=>{e.exports=i.p+"assets/1a5a16de0a49613048d1.jpg"},7388:(e,t,i)=>{e.exports=i.p+"assets/a1e2dd1264618d6338b3.jpg"},8957:(e,t,i)=>{e.exports=i.p+"assets/dc02cf4cb5ebbc2713b5.jpg"},8937:(e,t,i)=>{e.exports=i.p+"assets/2a049d7e799b63f35eac.gif"},9110:(e,t,i)=>{e.exports=i.p+"assets/03222a2f3e77522cb45f.svg"},3107:(e,t,i)=>{e.exports=i.p+"assets/3e3c7112428b312ccd8a.svg"},4591:(e,t,i)=>{e.exports=i.p+"assets/45ab92e1bb4b9855171d.svg"},4018:(e,t,i)=>{e.exports=i.p+"assets/c41a702abc59fe4ce190.svg"},882:(e,t,i)=>{e.exports=i.p+"assets/3b0f7f32bb5d03ce8070.svg"},2296:(e,t,i)=>{i.r(t)},2831:(e,t,i)=>{i.r(t)},8584:(e,t,i)=>{i.r(t)},8145:(e,t,i)=>{i.r(t)},2408:(e,t,i)=>{i.r(t)},198:(e,t,i)=>{i.r(t)},4607:(e,t,i)=>{i.r(t)},449:(e,t,i)=>{i.r(t)},3273:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SoundsApp=void 0;const s=i(6820),n=i(8218),o=i(5589),d=i(3489),a=i(3048),r=i(3323),l=i(5959),c=i(6197);t.SoundsApp=class{constructor(){this.render=()=>{const e=new d.VideoWrapper(l.srcVideo);this.videoView=e.render();const t=new s.HeaderWrapper(e.videoViews,this.indexActiveVideo);this.headerView=t.render();const i=new o.SliderWrapper(this.indexActiveVideo,r.imgLinks);this.sliderView=i.render(),this.informationInner.classList.add("content");const h=new n.PlayersSlider;this.informationInner.appendChild(h.render());const p=a.weatherWrapper();this.informationInner.appendChild(p);const u=new c.LogicSliders(this.indexActiveVideo,e.videoViews,e.container,i.imgViews,h.playerVies,h.playerMp3s,h.containerSong);u.render(),i.buttonNext.onclick=()=>u.shiftSlide(1,""),i.buttonPrev.onclick=()=>u.shiftSlide(-1,""),e.container.onmousedown=u.dragStart,e.container.ontransitionend=u.checkIndex},this.indexActiveVideo=localStorage.getItem("active")?Number(localStorage.getItem("active")):0,this.headerView=document.createElement("header"),this.videoView=document.createElement("section"),this.sliderView=document.createElement("section"),this.informationInner=document.createElement("div")}}},2236:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FullscreenButton=void 0,t.FullscreenButton=class{constructor(e,t){this.openFullscreenMode=()=>{const e=this.videoViews[this.indexActiveVideo];document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():e.requestFullscreen()},this.videoViews=e,this.indexActiveVideo=t}render(){const e=document.createElement("button");return e.type="button",e.classList.add("header__button"),e.innerHTML='<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M31.48 31.6299H23.05V35.8599H35.7001V23.1499H31.48V31.6299Z" fill="#B3B3B3"/>\n    <path d="M4.22 23.1499H0V35.8599H12.65V31.6299H4.22V23.1499Z" fill="#B3B3B3"/>\n    <path d="M0 12.71H4.22V4.24H12.65V0H0V12.71Z" fill="#B3B3B3"/>\n    <path d="M23.05 0V4.24H31.48V12.71H35.7001V0H23.05Z" fill="#B3B3B3"/>\n    </svg>',e.onclick=this.openFullscreenMode,e}}},6820:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderWrapper=void 0;const s=i(2236),n=i(2424);t.HeaderWrapper=class{constructor(e,t){this.videoViews=e,this.indexActiveVideo=t}render(){const e=document.createElement("header");e.classList.add("header");const t=n.headerTitle();e.appendChild(t);const i=new s.FullscreenButton(this.videoViews,this.indexActiveVideo);return e.appendChild(i.render()),e}}},2424:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.headerTitle=void 0,i(2296),t.headerTitle=()=>{const e=document.createElement("h1");return e.classList.add("header__title"),e.textContent="Slider-SoundsApp",e}},1243:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.modalView=void 0,i(2831),t.modalView=()=>{const{body:e}=document,t=document.createElement("div");t.classList.add("modal");const i=document.createElement("div");i.classList.add("modal-dialog"),t.appendChild(i);const s=document.createElement("div");s.classList.add("modal-content"),i.appendChild(s);const n=document.createElement("div");n.classList.add("modal-header"),s.appendChild(n);const o=document.createElement("h3");o.textContent="Vertical Slider",o.classList.add("modal-title"),n.appendChild(o);const d=document.createElement("button");d.type="button",d.textContent="×",d.classList.add("close"),n.appendChild(d);const a=document.createElement("div");a.classList.add("modal-body"),s.appendChild(a),a.innerHTML+='<div class="modal-item">\n  <h5>Базовый функционал приложения:</h5>\n  <p>[+10] При нажатии на стрелку вправо или влево происходит сдвиг слайда вверх или в противоположную сторону вниз.</p>\n</div>\n<div class="modal-item">\n  <h5>Обязательный дополнительный фукционал:</h5>\n  <p>[+10] Сделать слайдер бесконечным (зацикленным) когда после последнего слайда следующим идёт первый, а при перелистывании в обратную сторону, после первого слайда следующим идёт последний</p>\n</div>\n<div class="modal-item">\n  <h5>Дополнительный функционал на выбор:</h5>\n  <p>[+10] Пролистывание слайдера не только кликами по стрелкам, но и свайпами мышки</p>\n  <p>Перелистывание слайдера по средствам нажатия на превью картинки</p>\n  <p>[+10] Для каждого слайдера присутсвует свой кастомный плеер. При помощи данного плеера можно воспроизводить звуки и регулировать громкость. Также по нажатию на кнопку можно отключить звук.</p>\n  <p>[+10] при открытии новой темы при перелистыванием слайдера (кликом по кнопке или свайпом) автоматически запускаются все относящиеся к ней аудиоплееры, есть возможность независимо настраивать громкость каждого из них</p>\n  <p>Можно получить данные по указанному городу, если данные не найдены происходит появление сообщения об ошибке и данные не обновляются</p>\n  <p>последняя выбранная пользователем тема и указанный пользователем город, для которого отображается прогноз погоды, сохраняются при перезагрузке страницы</p>\n  <p>при клике по кнопке Fullscreen можно развернуть во весь экран слайд с видео, при этом боковая панель и сама кнопка Fullscreen скрывается</p>\n  <p>есть прелоадер, который отображается во время загрузки приложения</p>\n</div>';const r=document.createElement("button");r.classList.add("button-open","weather__button"),r.textContent="Самоценка",r.onclick=()=>{t.parentNode===e?e.removeChild(t):e.appendChild(t)},d.onclick=()=>{e.removeChild(t)},e&&e.appendChild(r)}},7141:function(e,t,i){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PlayButton=void 0;const n=s(i(4591)),o=s(i(3107));t.PlayButton=class{constructor(e){this.playAndPause=e=>{const t=e;this.isPlay?(this.isPlay=!1,t.src=n.default,this.mp3.pause()):(this.isPlay=!0,t.src=o.default,this.mp3.play())},this.stop=e=>{e.src=n.default,this.isPlay=!1},this.start=e=>{this.isPlay=!0,e.src=o.default},this.render=()=>{const e=document.createElement("button");e.type="button",e.classList.add("song-item__button");const t=document.createElement("img");return t.src=n.default,t.alt="кнопка для включения и выключения музыки",e.appendChild(t),e.onclick=()=>this.playAndPause(t),this.mp3.addEventListener("pause",(()=>this.stop(t))),this.mp3.addEventListener("play",(()=>this.start(t))),e},this.mp3=e,this.isPlay=!1}}},862:function(e,t,i){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PlayVolume=void 0;const n=s(i(4018)),o=s(i(9110));t.PlayVolume=class{constructor(e){this.mp3=e,this.isPlayVolume=!0,this.valueVolume=.5,this.isMouse=!1}setVolume(e,t){const i=e,s=t;this.mp3.volume=Number(i.value)/100,i.style.background=`linear-gradient(to right, #00cfde 0%, #00cfde ${i.value}%, #557b88 ${i.value}%, #557b88 100%)`,"0"===i.value&&this.isPlayVolume?(this.isPlayVolume=!1,this.valueVolume=50,s.src=o.default):0===Number(i.value)||this.isPlayVolume||(this.isPlayVolume=!0,s.src=n.default)}volumeButton(e,t){const i=e,s=t;this.isPlayVolume?(this.isPlayVolume=!1,this.valueVolume=Number(i.value),i.value="0",this.mp3.volume=0,s.src=o.default):(this.isPlayVolume=!0,i.value=String(this.valueVolume),this.mp3.volume=this.valueVolume/100,s.src=n.default),i.style.background=`linear-gradient(to right, #00cfde 0%, #00cfde ${i.value}%, #557b88 ${i.value}%, #557b88 100%)`}setIsMouse(e){"down"===e?this.isMouse=!0:"up"===e&&(this.isMouse=!1)}render(){const e=document.createElement("div");e.classList.add("song-item-wrapper--volume");const t=document.createElement("button");t.classList.add("song-item__button","song-item__button--small"),e.appendChild(t);const i=document.createElement("img");i.src=n.default,i.alt="кнопка для включения и отключения звука",t.appendChild(i);const s=document.createElement("input");return s.classList.add("song-item__progress"),s.type="range",s.value="50",s.min="0",s.max="100",s.step="1",s.style.background=`linear-gradient(to right, #00cfde 0%, #00cfde ${s.value}%, #557b88 ${s.value}%, #557b88 100%)`,e.appendChild(s),s.addEventListener("change",(()=>this.setVolume(s,i))),s.addEventListener("mousemove",(()=>this.isMouse&&this.setVolume(s,i))),s.addEventListener("mousedown",(()=>this.setIsMouse("down"))),s.addEventListener("mouseup",(()=>this.setIsMouse("up"))),t.onclick=()=>this.volumeButton(s,i),e}}},3689:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0;const s=i(7141),n=i(862);t.Player=class{constructor(e,t,i){this.src=e,this.text=t,this.audio=i}render(){this.audio.src=this.src,this.audio.loop=!0;const e=document.createElement("div");e.classList.add("song-item");const t=document.createElement("h4");t.classList.add("song-item__title"),t.textContent=this.text,e.appendChild(t);const i=document.createElement("div");i.classList.add("song-item-wrapper"),e.appendChild(i);const o=new s.PlayButton(this.audio);i.appendChild(o.render());const d=new n.PlayVolume(this.audio);return i.appendChild(d.render()),e}}},6403:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PlayerItem=void 0;const s=i(3689);t.PlayerItem=class{constructor(){this.playerMp3_1=new Audio,this.playerMp3_2=new Audio}render(e,t,i,n){const o=document.createElement("div");o.classList.add("song__slider");const d=new s.Player(e,t,this.playerMp3_1);o.appendChild(d.render());const a=new s.Player(i,n,this.playerMp3_2);return o.appendChild(a.render()),o}}},8218:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PlayersSlider=void 0;const s=i(938),n=i(6403);i(2408),t.PlayersSlider=class{constructor(){this.render=()=>{const e=document.createElement("section");return e.classList.add("song"),this.containerSong.classList.add("song-sliders"),e.appendChild(this.containerSong),s.links.forEach(((e,t)=>{const{srcFirstSong:i,textFirstSong:s,srcSecondSong:o,textSecondSong:d}=e,a=new n.PlayerItem;this.playerVies.push(a.render(i,s,o,d)),this.playerMp3s.push(a.playerMp3_1),this.playerMp3s.push(a.playerMp3_2),this.containerSong.appendChild(this.playerVies[t])})),e},this.playerVies=[],this.playerMp3s=[],this.containerSong=document.createElement("div")}}},5589:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SliderWrapper=void 0;const s=i(4040),n=i(5807);i(8145),t.SliderWrapper=class{constructor(e,t){this.indexActiveVideo=e,this.imgLinks=t,this.imgViews=[],this.buttonPrev=document.createElement("button"),this.buttonNext=document.createElement("button")}render(){const e=document.createElement("section");e.classList.add("slider"),e.appendChild(s.sliderButton(this.buttonPrev,""));const t=document.createElement("div");return t.classList.add("slider-container"),e.appendChild(t),this.imgLinks.forEach(((e,i)=>{this.imgViews.push(n.sliderImg(e)),t.appendChild(this.imgViews[i])})),this.imgViews[this.indexActiveVideo].classList.add("slider__item--active"),e.appendChild(s.sliderButton(this.buttonNext,"slider__button--next")),e}}},4040:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sliderButton=void 0,t.sliderButton=(e,t)=>{const i=e;return i.classList.add("slider__button"),i.type="button",i.innerHTML='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g>\n  <path fill="#fff" d="m232.248 154.599-21.213-21.213-122.615 122.614 122.615 122.614 \n  21.213-21.213-41.402-41.401h212.433v-120h-212.433zm141.031 71.401v60h-212.432l-30-30 30-30z"/></g></svg>',0!==t.length&&i.classList.add(t),i}},5807:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sliderImg=void 0,t.sliderImg=e=>{const t=document.createElement("img");return t.classList.add("slider__item"),t.src=e,t.alt="image",t}},3489:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.VideoWrapper=void 0,i(4607);const s=i(3838);t.VideoWrapper=class{constructor(e){this.videoLinks=e,this.videoViews=[],this.container=document.createElement("div")}render(){const e=document.createElement("section");return e.classList.add("video"),this.container.classList.add("video-sliders"),e.appendChild(this.container),this.videoLinks.forEach(((e,t)=>{this.videoViews.push(s.videoView(e)),this.container.appendChild(this.videoViews[t])})),e}}},3838:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.videoView=void 0,t.videoView=e=>{const t=document.createElement("div");t.classList.add("video__slider");const i=document.createElement("video");return i.classList.add("video__slider-item"),i.src=e,i.loop=!0,i.muted=!0,i.preload="auto",i.playsInline=!0,i.autoplay=!0,t.appendChild(i),t}},2196:function(e,t,i){var s=this&&this.__awaiter||function(e,t,i,s){return new(i||(i=Promise))((function(n,o){function d(e){try{r(s.next(e))}catch(e){o(e)}}function a(e){try{r(s.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(d,a)}r((s=s.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WeatherInformation=void 0;const o=n(i(882)),d=i(463);t.WeatherInformation=class{constructor(){this.imgWeather=document.createElement("img"),this.temp=document.createElement("p"),this.description=document.createElement("p"),this.speed=document.createElement("p"),this.deg=document.createElement("p")}requestWeather(e,t){return s(this,void 0,void 0,(function*(){const i=t,s=e.value,n=`https://api.openweathermap.org/data/2.5/weather?q=${s}&appid=e57c98f149763a48dfe1dc5f0325fe2c&lang=en`;try{const e=yield fetch(n),t=yield e.json();this.imgWeather.src=`http://openweathermap.org/img/w/${t.weather[0].icon}.png`,this.temp.textContent=`${t.main.temp}F`,this.description.textContent=t.weather[0].description,this.speed.textContent=`${t.wind.speed}m/s`,this.deg.textContent=d.parserDeg(t.wind.deg),localStorage.setItem("cityName",s),i.textContent="",i.classList.remove("weather__text--active")}catch(e){i.textContent="Error: City not find",i.classList.add("weather__text--active")}}))}render(){const e=document.createElement("div");e.classList.add("weather-wrapper");const t=document.createElement("div");t.classList.add("weather-card"),e.appendChild(t),this.imgWeather.classList.add("weather-card__img"),t.appendChild(this.imgWeather),this.temp.classList.add("weather-card__text"),t.appendChild(this.temp),this.description.classList.add("weather-card__text"),t.appendChild(this.description);const i=document.createElement("div");i.classList.add("weather-card"),e.appendChild(i);const s=document.createElement("img");return s.classList.add("weather-card__img"),s.alt="wind",s.src=o.default,i.appendChild(s),this.speed.classList.add("weather-card__text"),i.appendChild(this.speed),this.deg.classList.add("weather-card__text"),i.appendChild(this.deg),e}}},1984:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WeatherSearch=void 0,t.WeatherSearch=class{constructor(){this.city=localStorage.getItem("city")?String(localStorage.getItem("city")):"Minsk",this.input=document.createElement("input"),this.button=document.createElement("button"),this.text=document.createElement("p")}render(){const e=document.createElement("div"),t=document.createElement("div");return this.input.type="text",this.input.classList.add("weather__input"),this.input.value=this.city,t.appendChild(this.input),this.button.classList.add("weather__button"),this.button.textContent="Search",t.appendChild(this.button),e.appendChild(t),this.text.classList.add("weather__text"),e.appendChild(this.text),e}}},463:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parserDeg=void 0,t.parserDeg=e=>{let t=e;return t+=22.5,t<0?t=360-Math.abs(t)%360:t%=360,["Northerly","North Easterly","Easterly","South Easterly","Southerly","South Westerly","Westerly","North Westerly"][parseInt(String(t/45),10)]}},3048:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.weatherWrapper=void 0;const s=i(1984);i(449);const n=i(2196);t.weatherWrapper=()=>{const e=document.createElement("section");e.classList.add("weather");const t=new s.WeatherSearch;e.appendChild(t.render());const i=new n.WeatherInformation;return e.appendChild(i.render()),t.button.onclick=()=>i.requestWeather(t.input,t.text),i.requestWeather(t.input,t.text),e}},3323:function(e,t,i){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.imgLinks=void 0;const n=s(i(9107)),o=s(i(9724)),d=s(i(6801)),a=s(i(8154)),r=s(i(8957)),l=s(i(7388)),c=[n.default,o.default,d.default,a.default,r.default,l.default];t.imgLinks=c},938:function(e,t,i){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.links=void 0;const n=s(i(4019)),o=s(i(9753)),d=s(i(2501)),a=s(i(7104)),r=s(i(476)),l=s(i(2218)),c=s(i(6082)),h=s(i(5089)),p=s(i(206)),u=s(i(7468)),m=s(i(1740)),f=s(i(1353)),v=[{srcFirstSong:n.default,textFirstSong:"The cry of a flying seagull",srcSecondSong:o.default,textSecondSong:"The sound of the waves on the sea"},{srcFirstSong:d.default,textFirstSong:"Summer field",srcSecondSong:a.default,textSecondSong:"Common Yellowthroat butterfly"},{srcFirstSong:r.default,textFirstSong:"Autumn forest atmosphere",srcSecondSong:l.default,textSecondSong:"Stork preparing for departure"},{srcFirstSong:c.default,textFirstSong:"Christmas is coming",srcSecondSong:h.default,textSecondSong:"fire in the fireplace"},{srcFirstSong:p.default,textFirstSong:"jungle nature",srcSecondSong:u.default,textSecondSong:"small waterfall"},{srcFirstSong:m.default,textFirstSong:"insects in the field",srcSecondSong:f.default,textSecondSong:"wind on a hot day"}];t.links=v},5959:function(e,t,i){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.srcVideo=void 0;const n=s(i(9908)),o=s(i(8157)),d=s(i(5015)),a=s(i(5977)),r=s(i(9945)),l=s(i(7601)),c=[n.default,o.default,d.default,a.default,l.default,r.default];t.srcVideo=c},6197:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LogicSliders=void 0;const s=i(9010),n=i(8112);t.LogicSliders=class{constructor(e,t,i,n,o,d,a){this.dragAction=e=>{this.posX2=this.posX1-e.clientY,this.posX1=e.clientY,this.videoContainer.style.top=this.videoContainer.offsetTop-this.posX2+"px"},this.dragEnd=()=>{this.posFinalVideo=this.videoContainer.offsetTop,this.posFinalVideo-this.posInitialVideo<-this.threshold?this.shiftSlide(1,"drag"):this.posFinalVideo-this.posInitialVideo>this.threshold?this.shiftSlide(-1,"drag"):this.videoContainer.style.top=`${this.posInitialVideo}px`,document.onmouseup=null,document.onmousemove=null},this.shiftSlide=(e,t)=>{this.videoContainer.classList.add("shifting"),this.containerSong.classList.add("shifting"),this.playerMp3s.forEach((e=>e.pause())),this.imgViews.forEach((e=>e.classList.remove("slider__item--active"))),this.allowShift&&(t||(this.posInitialVideo=this.videoContainer.offsetTop),this.posInitialSong=this.containerSong.offsetTop-20,1===e?(this.videoContainer.style.top=this.posInitialVideo-this.videoViews[0].offsetHeight+"px",this.containerSong.style.top=this.posInitialSong-this.playerVies[0].offsetHeight+"px",this.index+=1):-1===e&&(this.videoContainer.style.top=`${this.posInitialVideo+this.videoViews[0].offsetHeight}px`,this.containerSong.style.top=`${this.posInitialSong+this.playerVies[0].offsetHeight}px`,this.index-=1),-1===this.index?this.imgViews[this.imgViews.length-1].classList.add("slider__item--active"):this.index===this.imgViews.length?this.imgViews[0].classList.add("slider__item--active"):this.imgViews[this.index].classList.add("slider__item--active")),this.allowShift=!1},this.dragStart=e=>{e.preventDefault(),this.posInitialVideo=this.videoContainer.offsetTop,this.posX1=e.clientY,document.onmouseup=this.dragEnd,document.onmousemove=this.dragAction},this.checkIndex=()=>{this.videoContainer.classList.remove("shifting"),this.containerSong.classList.remove("shifting"),-1===this.index&&(this.videoContainer.style.top=-this.videoViews.length*this.videoViews[0].offsetHeight+"px",this.containerSong.style.top=-this.playerVies.length*this.playerVies[0].offsetHeight+"px",this.index=this.videoViews.length-1),this.index===this.videoViews.length&&(this.videoContainer.style.top=-1*this.videoViews[0].offsetHeight+"px",this.containerSong.style.top=-1*this.playerVies[0].offsetHeight+"px",this.index=0),localStorage.setItem("active",String(this.index)),this.playerMp3s[2*this.index].play(),this.playerMp3s[2*this.index+1].play(),s.imgBody(this.imgViews[this.index]),this.allowShift=!0},this.posX1=0,this.posX2=0,this.threshold=100,this.index=e,this.allowShift=!0,this.posInitialVideo=0,this.posFinalVideo=0,this.videoViews=t,this.videoContainer=i,this.posInitialSong=0,this.posFinalSong=0,this.playerVies=o,this.playerMp3s=d,this.containerSong=a,this.imgViews=n}render(){const e=this.videoViews[0],t=this.videoViews[this.videoViews.length-1],i=e.cloneNode(!0),o=t.cloneNode(!0);this.videoContainer.appendChild(i),this.videoContainer.insertBefore(o,e),this.videoContainer.style.top=-500*(this.index+1)+"px";const d=this.playerVies[0],a=this.playerVies[this.playerVies.length-1],r=d.cloneNode(!0),l=a.cloneNode(!0);this.containerSong.appendChild(r),this.containerSong.insertBefore(l,d),this.containerSong.style.top=-220*(this.index+1)+"px",s.imgBody(this.imgViews[this.index]),this.imgViews.forEach(((e,t)=>e.addEventListener("click",(()=>{this.index=t,n.logicImgClick(this.videoContainer,this.imgViews,this.index,this.containerSong)}))))}}},9010:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.imgBody=void 0,t.imgBody=e=>{const{body:t}=document;t&&(t.style.backgroundImage=`url(${e.src})`)}},8112:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.logicImgClick=void 0,t.logicImgClick=(e,t,i,s)=>{const n=e,o=s;n.classList.add("shifting"),o.classList.add("shifting"),t.map((e=>e.classList.remove("slider__item--active"))),n.style.top=-(500+500*i)+"px",o.style.top=-(220+220*i)+"px",-1===i?t[t.length-1].classList.add("slider__item--active"):i===t.length?t[0].classList.add("slider__item--active"):t[i].classList.add("slider__item--active")}},4144:function(e,t,i){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.preloader=void 0;const n=s(i(8937));i(8584),t.preloader=()=>{const{body:e}=document,t=document.createElement("div");t.classList.add("preloader");const i=document.createElement("img");i.src=n.default,i.alt="preloader",t.appendChild(i),e&&e.appendChild(t),window.onload=()=>{t.classList.add("hide-preloader"),setInterval((()=>{t.classList.add("preloader-hidden")}),990)}}}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,i),o.exports}i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{const e=i(3273);i(198);const t=i(4144),s=i(1243),n=document.getElementById("root"),o=new e.SoundsApp;o.render(),n&&(n.appendChild(o.headerView),n.appendChild(o.videoView),n.appendChild(o.sliderView),n.appendChild(o.informationInner)),t.preloader(),s.modalView()})()})();