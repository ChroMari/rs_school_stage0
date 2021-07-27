class ProgressBar {
  constructor (bodyVideo, video) {
    this.rangeProgress = document.createElement('input');
    this.video = video;
    this.bodyVideo = bodyVideo;
  }

  scrub () {
    this.video.currentTime = (this.video.duration / 100) *  this.rangeProgress.value;
    this.rangeProgress.value = (this.video.currentTime / this.video.duration) * 100;
    rangeProgress.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${this.rangeProgress.value}%, #C4C4C4 ${this.rangeProgress.value}%, white 100%)`;  
  }

  handleProgress () {
    const value = (this.video.currentTime / this.video.duration) * 100;
    if (!isNaN(value)) {
      this.rangeProgress.value = value;
      this.rangeProgress.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #C4C4C4 ${value}%, white 100%)`;
    } else {
      this.rangeProgress.value = '0';
      this.rangeProgress.style.background = `linear-gradient(to right, #24809E 0%, #24809E 0%, #C4C4C4 0%, white 100%)`;
    }
  }

  render() {
    this.rangeProgress.classList.add('progress');
    this.rangeProgress.type = 'range';
    this.rangeProgress.name = 'progress';
    this.rangeProgress.min = '0';
    this.rangeProgress.max = '100';
    this.rangeProgress.step = '0.05';
    this.rangeProgress.setAttribute('value', '0');

    this.rangeProgress.onchange = () => this.scrub();
    this.video.addEventListener('timeupdate', () => this.handleProgress());

    let mousedown = false;
    this.rangeProgress.addEventListener('mousemove', () => mousedown && scrub());
    this.rangeProgress.addEventListener('mousedown', () => mousedown = true);
    this.rangeProgress.addEventListener('mouseup', () => mousedown = false);

    this.bodyVideo.appendChild(this.rangeProgress)
    return this.rangeProgress;
  }
};

export default ProgressBar;