class BackBtn {
  constructor (btnWrapper, video, videoArrays) {
    this.btnWrapper = btnWrapper;
    this.video = video;
    this.videoArrays = videoArrays;
  }

  getBack () {
    let videoSrcArray = this.video.src.split('/');
    let videoSrc = videoSrcArray[videoSrcArray.length -1];

    let flag = true;
    let index = 0;
    do {
      let itemSrcArray = this.videoArrays[index].src.split('/');
      let itemSrc = itemSrcArray[itemSrcArray.length -1];

      if (itemSrc === videoSrc) {
        flag = false;
        break;
      }
      index++;
    } while (flag)

    if (index - 1 < 0) index = this.videoArrays.length - 1;
    else index -= 1;

    this.video.src = this.videoArrays[index].src;
    this.video.currentTime = 0;
    this.video.poster = this.videoArrays[index].poster;
  }

  render () {
    const button = document.createElement('button');
    button.classList.add('player__controls-button');

    const img = document.createElement('img');
    img.src = './assets/svg/back.svg';
    img.alt = 'back button';
    img.width = '27';
    img.height = '30';

    button.appendChild(img);

    this.btnWrapper.appendChild(button);

    return button;
  }
};

export default BackBtn;
