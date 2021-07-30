import imgSrc from '../../assets/svg/next.svg';

class NextBtn {
  constructor (btnWrapper, video, videoArrays) {
    this.btnWrapper = btnWrapper;
    this.video = video;
    this.videoArrays = videoArrays;
  }

  getNextVideo () {
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

    if (index + 1 == this.videoArrays.length) index = 0;
    else index += 1;
    console.log(index)
    this.video.src = this.videoArrays[index].src;
    this.video.currentTime = 0;
    this.video.poster = this.videoArrays[index].poster;
  }

  render () {
    const button = document.createElement('button');
    button.classList.add('player__controls-button');
    this.btnWrapper.appendChild(button);

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'next button';
    img.width = '27';
    img.height = '30';
    button.appendChild(img);

    return button;
  }
};

export default NextBtn;
