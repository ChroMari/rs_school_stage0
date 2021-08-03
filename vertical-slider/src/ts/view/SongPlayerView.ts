import playSrc from '../../assets/svg/play.svg';
// нужно скрытый тег аудио добавить чтобы была возможность включить, выключить звук

class SongPlayerView {
  srcSong: string;

  textSong: string;

  mp: HTMLVideoElement;

  isPlay: boolean;

  constructor(srcSong: string, textSong: string) {
    this.srcSong = srcSong;
    this.textSong = textSong;
    this.mp = document.createElement('video');

    this.isPlay = false;
  }

  playAndPauseSong = (img: HTMLImageElement): void => {
    const imgVolume = img;

    if (!this.isPlay) {
      this.isPlay = true;
      this.mp.play();
    } else {
      this.isPlay = false;
      imgVolume.src = playSrc; // ставим иконку паузы
      this.mp.pause(); // останавливаем запущенную музыку
    }
  };

  render = (): HTMLElement => {
    const itemBody = document.createElement('div');
    itemBody.classList.add('song');

    const titleSong = document.createElement('h4');
    titleSong.classList.add('song__title');
    titleSong.textContent = this.srcSong;
    itemBody.appendChild(titleSong);

    const wrapperSong = document.createElement('div');
    wrapperSong.classList.add('song-wrapper');
    itemBody.appendChild(wrapperSong);

    // кнопка для запуска и паузы музыки
    const playButtonSong = document.createElement('button'); // всё так нужно будет обязательно через button делать иначе вообще не выходит
    playButtonSong.classList.add('song__btn');
    wrapperSong.appendChild(playButtonSong);

    const playImgButtonSong = document.createElement('img');
    playImgButtonSong.src = playSrc;
    playImgButtonSong.alt = 'кнопка для включения и выключения музыки';
    playButtonSong.appendChild(playImgButtonSong);

    playButtonSong.onclick = () => this.playAndPauseSong(playImgButtonSong);

    // кнопка для включения и выключения музыки
    const volumeWrapper = document.createElement('div');
    volumeWrapper.classList.add('song__btn-wrapper');
    wrapperSong.appendChild(volumeWrapper);

    const VolumeButton = document.createElement('button');
    VolumeButton.classList.add('song__btn');
    volumeWrapper.appendChild(VolumeButton);

    const volumeImgButton = document.createElement('img');
    volumeImgButton.src = playSrc;
    volumeImgButton.alt = 'кнопка включение и отключения громкости музыки';
    VolumeButton.appendChild(volumeImgButton);

    const rangeVolume = document.createElement('input');
    rangeVolume.classList.add('song__progress');
    rangeVolume.type = 'range';
    rangeVolume.value = '0.5';
    rangeVolume.min = '0';
    rangeVolume.max = '1';
    rangeVolume.step = '0.01';
    volumeWrapper.appendChild(rangeVolume);

    return itemBody;
  };
}

export { SongPlayerView };
