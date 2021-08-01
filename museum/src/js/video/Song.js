import imgSrcSong from '../../assets/svg/song.svg';
import imgSrcNoSong from '../../assets/svg/no_song.svg';

class Song {
  constructor (songWrapper, video) {
    this.img = document.createElement('img');
    this.input = document.createElement('input');
    this.video = video;
    this.songWrapper = songWrapper;
    this.stateFlag = true;
    this.stateVolume = 0.50;
  }

  toggleVolume () {
      if (this.stateFlag) {
        this.stateFlag = false;
        this.stateVolume = this.input.value;
        this.input.value = 0;
        this.input.style.background = `linear-gradient(to right, #24809E 0%, #24809E 0%, #C4C4C4 0%, #C4C4C4 100%)`;
        this.img.src = imgSrcNoSong;
        this.img.alt = 'звук отключён';
        this.video.volume = 0;
      } else {
        this.stateFlag = true;
        this.input.value = this.stateVolume;
        this.img.src = imgSrcSong;
        this.img.alt = 'звук включен';
        this.video.volume = this.stateVolume;
        const value = this.input.value * 100;
        console.log(value)
        this.input.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
      }
  }

  scrubVolume () {
    if (!this.stateFlag) {
      this.stateVolume = this.input.value;
      this.toggleVolume();
    }
    this.video.volume = this.input.value;
    const value = this.input.value * 100;
    this.input.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;

    if (value === 0) {
      this.img.src = imgSrcNoSong;
      this.img.alt = 'звук отключён';
      this.stateFlag =  false;
      this.stateVolume = 0.50;
    } else if (value > 0 && this.stateFlag === false) {
      this.img.src = imgSrcSong;
      this.img.alt = 'звук включен';
      this.stateFlag = true;
    }
  }

  render () {
    const button = document.createElement('button');
    button.classList.add('player__controls-button');
    this.songWrapper.appendChild(button);

    this.img.src = imgSrcSong;
    this.img.alt = 'song button';
    button.appendChild(this.img);
    button.onclick = () => this.toggleVolume();

    this.input.classList.add('player__controls-progress',  'player__controls-song');
    this.input.type = 'range';
    this.input.name = 'volume';
    this.input.min = '0';
    this.input.max = '1';
    this.input.step = '0.01';
    this.input.setAttribute('value', '0.42');
    this.input.style.background = 'linear-gradient(to right, #24809E 0%, #24809E 42%, #C4C4C4 42%, #C4C4C4 100%)';
    this.songWrapper.appendChild(this.input);

    this.input.addEventListener('change', () => this.scrubVolume()); 
    let mousedownVolume = false;
    this.input.addEventListener('mousemove', () => mousedownVolume && this.scrubVolume());
    this.input.addEventListener('mousedown', () => mousedownVolume = true);
    this.input.addEventListener('mouseup', () => mousedownVolume = false);

    return button;
  }
};

export default Song;
