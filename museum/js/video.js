/*const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');*/

/* Build out functions */
/*function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}*/

/* Hook up the event listeners */
/*video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);*/

const bodyVideo = document.querySelector('.player__controls');
const video = document.querySelector('.player__video');

video.addEventListener('click', togglePlay); // если нажали по самому видео
video.addEventListener('play', updateButton); // когда видео включено, на нашем кастомном плеере нужно изменить значок
video.addEventListener('pause', updateButton); // вызываем туже самую функцию для смены вида кнопки
video.addEventListener('timeupdate', handleProgress); // отвечает за обновление прогресса воспроизведения видео

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton () {
  const method = video.paused ? 'play' : 'pause';
  if (method === 'pause') btnPlayImg.src = './assets/svg/next.svg';
  else if (method === 'play') btnPlayImg.src = './assets/svg/play.svg';
  return;
}

function handleProgress() { //сдвигает вперед прогресс полосу, когда воспроизводится видео
  const value = (video.currentTime / video.duration) * 100;
  rangeProgress.value = value;
  rangeProgress.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #C4C4C4 ${value}%, white 100%)`;
}

function scrub(e) { //определяет насколько полозователь сдвинул вперед полосу прогресса
  const scrubTime = (e.offsetX / rangeProgress.offsetWidth) * video.duration; //НИФИГА не работает как нужно 
  console.log(scrubTime)
  video.currentTime = scrubTime;
}

/**
 * кнопка которая отвечает за включение и выключение видео с паузы и на паузу
 * <button class="player__button"><img src="./assets/svg/play.svg" alt="play button"></button>
 */
  const btnPlay = document.createElement('button');
  btnPlay.classList.add('player__button');

  const btnPlayImg = document.createElement('img');
  btnPlayImg.src = './assets/svg/play.svg';
  btnPlayImg.alt = 'play button';
  btnPlay.appendChild(btnPlayImg);

btnPlay.onclick = togglePlay;

/**
 * range который собой показывает сколько уже прошло видео
 * <input class="player__range progress" type="range" name="volume" min="0" max="100" step="1" value="0">
 * min="0" max="1" step="0.05"
 */
const rangeProgress = document.createElement('input');
rangeProgress.classList.add('progress');
rangeProgress.type = 'range';
rangeProgress.name = 'volume';
rangeProgress.min = '0';
rangeProgress.max = '100';
rangeProgress.step = '0.05';
rangeProgress.setAttribute('value', '0');

let mousedown = false;
rangeProgress.addEventListener('click', (e) => scrub(e));
rangeProgress.addEventListener('mousemove', (e) => mousedown && scrub(e));
rangeProgress.addEventListener('mousedown', () => mousedown = true);
rangeProgress.addEventListener('mouseup', () => mousedown = false);

/*rangeProgress.addEventListener('input', function(e) {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #C4C4C4 ${value}%, white 100%)`;
  const scrubTime = (e.offsetX / rangeProgress.offsetWidth) * video.duration;
  console.log(e.offsetX, rangeProgress.offsetWidth, video.duration)
  video.currentTime = scrubTime;
});*/

bodyVideo.appendChild(btnPlay);
bodyVideo.appendChild(rangeProgress);