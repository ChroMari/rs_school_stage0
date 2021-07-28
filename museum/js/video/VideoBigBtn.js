/**
 * НУЖНО БУДЕТ ЗАДАТЬ ДОПОЛНИТЕЛЬНЫЙ КЛАСС ВИДЕО, ЧТОБЫ КРУЖОК ВСЕГДА ВЫХОДИЛ КРУГЛЫМ
 */
class VideoBigBtn {
  constructor (video, playWind) {
    this.video = video;
    this.playWind = playWind;
    this.img = document.createElement('img');
  }

  stopButton () {
    this.img.src = './assets/svg/big_play.svg';
    this.img.alt = 'Воспроизвести видео';
  }

  toggleVideo (button) {
    const method = this.video.paused ? 'play' : 'pause';
    this.video[method]();
   
    if (method === 'play') {
      button.style.opacity = 0;
      this.img.src = './assets/svg/big_pause.svg';
      this.img.alt = 'Поставить видео на паузу';
    } else {
      button.style.opacity = 1;
      this.img.src = './assets/svg/big_play.svg';
      this.img.alt = 'Воспроизвести видео';
    }
  }

  updateButton (button) { //функция, которая меняет вид картинки в зависимости от того идёт видео или нет
    const method = this.video.paused ? 'play' : 'pause';
    if (method === 'pause') {
      button.style.opacity = 0;
      this.img.src = './assets/svg/big_pause.svg';
      this.img.alt = 'Поставить видео на паузу';
    }
    else if (method === 'play') {
      button.style.opacity = 1;
      this.img.src = './assets/svg/big_play.svg';
      this.img.alt = 'Воспроизвести видео';
    }
  }

  mouseToggleVideo (mouseMethod, button) {
    const method = this.video.paused ? 'play' : 'pause';
    if (method === 'pause' && mouseMethod === 'move') button.style.opacity = '1';
    else if (method === 'pause' && mouseMethod === 'out') button.style.opacity = '0';
  }

  render () {
    const button = document.createElement('button');
    button.classList.add('player__button-play');
    this.playWind.appendChild(button);
    button.onclick = () => this.toggleVideo(button);
    this.playWind.addEventListener('mousemove', () => this.mouseToggleVideo('move', button));
    this.playWind.addEventListener('mouseout', () => this.mouseToggleVideo('out', button));

    this.img.src = './assets/svg/big_play.svg';
    this.img.alt = 'Воспроизвести видео';
    button.appendChild(this.img);

    this.video.addEventListener('play', () => this.updateButton(button)); // когда видео включено, на нашем кастомном плеере нужно изменить значок
    this.video.addEventListener('pause', () => this.updateButton(button)); 

    return button;
  }
}

export default VideoBigBtn;