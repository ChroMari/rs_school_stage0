import srcVolume from '../../assets/svg/volume.svg';
import srcNoVolume from '../../assets/svg/no_volume.svg';

class VolumeControls {
  mp3: HTMLAudioElement;

  isPlayVolume: boolean;

  valueVolume: number;

  isMouse: boolean;

  constructor(mp3: HTMLAudioElement) {
    this.mp3 = mp3;
    this.isPlayVolume = true;
    this.valueVolume = 0.5;
    this.isMouse = false;
  }

  setVolume(range: HTMLInputElement, img: HTMLImageElement): void {
    const oldVolume = range;
    const oldImg = img;
    this.mp3.volume = Number(oldVolume.value) / 100;
    oldVolume.style.background = `linear-gradient(to right, #00cfde 0%, #00cfde ${oldVolume.value}%, #557b88 ${oldVolume.value}%, #557b88 100%)`;

    if (oldVolume.value === '0' && this.isPlayVolume) {
      this.isPlayVolume = false;
      this.valueVolume = 0.5 * 100;
      oldImg.src = srcNoVolume;
    } else if (Number(oldVolume.value) !== 0 && !this.isPlayVolume) {
      this.isPlayVolume = true;
      oldImg.src = srcVolume;
    }
  }

  volumeButton(range: HTMLInputElement, img: HTMLImageElement): void {
    const oldVolume = range;
    const oldImg = img;
    if (this.isPlayVolume) {
      this.isPlayVolume = false;
      this.valueVolume = Number(oldVolume.value);
      oldVolume.value = '0';
      this.mp3.volume = 0;
      oldImg.src = srcNoVolume;
    } else {
      this.isPlayVolume = true;
      oldVolume.value = String(this.valueVolume);
      this.mp3.volume = this.valueVolume / 100;
      oldImg.src = srcVolume;
    }
    oldVolume.style.background = `linear-gradient(to right, #00cfde 0%, #00cfde ${oldVolume.value}%, #557b88 ${oldVolume.value}%, #557b88 100%)`;
  }

  setIsMouse(method: string): void {
    if (method === 'down') this.isMouse = true;
    else if (method === 'up') this.isMouse = false;
  }

  render(): HTMLElement {
    const container = document.createElement('div');
    container.classList.add('song__player-volume');

    const button = document.createElement('button');
    button.classList.add('song__player-btn', 'song__player-btn--small');
    container.appendChild(button);

    const img = document.createElement('img');
    img.src = srcVolume;
    img.alt = 'кнопка для включения и отключения звука';
    button.appendChild(img);

    const range = document.createElement('input');
    range.classList.add('song__player-progress');
    range.type = 'range';
    range.value = '50';
    range.min = '0';
    range.max = '100';
    range.step = '1';
    range.style.background = `linear-gradient(to right, #00cfde 0%, #00cfde ${range.value}%, #557b88 ${range.value}%, #557b88 100%)`;
    container.appendChild(range);

    range.addEventListener('change', () => this.setVolume(range, img));
    range.addEventListener('mousemove', () => this.isMouse && this.setVolume(range, img));
    range.addEventListener('mousedown', () => this.setIsMouse('down'));
    range.addEventListener('mouseup', () => this.setIsMouse('up'));

    button.onclick = () => this.volumeButton(range, img);

    return container;
  }
}

export { VolumeControls };
