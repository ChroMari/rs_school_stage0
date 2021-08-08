let posX1 = 0;
let posX2 = 0;
let posInitial = 0;
let posFinal;
let threshold = 100;
let index = 0;
let allowShift = true;

const dragAction = (e: MouseEvent, videoSliders: HTMLElement) => {
  posX2 = posX1 - e.clientX;
  posX1 = e.clientX;
  videoSliders.style.left = videoSliders.offsetLeft - posX2 + 'px';
};

const dragEnd = (videoSliders: HTMLElement) => {
  posFinal = videoSliders.offsetLeft;
  if (posFinal - posInitial < -threshold) shiftSlide(1, 'drag', videoSliders);
  else if (posFinal - posInitial > threshold) shiftSlide(-1, 'drag', videoSliders);
  else videoSliders.style.left = posInitial + 'px';

  document.onmouseup = null;
  document.onmousemove = null;
};

const shiftSlide = (dir: number, action: string, videoSliders: HTMLElement, videoCollectionsRender) => {
  videoSliders.classList.add('shifting');
  if (allowShift) {
    if (!action) posInitial = videoSliders.offsetLeft;
    if (dir === 1) {
      videoSliders.style.left = posInitial - videoCollectionsRender[0].offsetWidth + 'px';
      index++;
    } else if (dir === -1) {
      videoSliders.style.left = posInitial + videoCollectionsRender[0].offsetWidth + 'px';
      index--;
    }
  }

  allowShift = false;
};

const dragStart = (e: MouseEvent) => {
  e.preventDefault();
  posInitial = videoSliders.offsetLeft;

  posX1 = e.clientX;
  document.onmouseup = () => dragEnd(videoSliders);
  document.onmousemove = (e) => dragAction(e, videoSliders);
};

const checkIndex = () => {
  videoSliders.classList.remove('shifting');

  if (index == -1) {
    videoSliders.style.left =
      -(videoCollectionsRender.length * videoCollectionsRender[0].offsetWidth) + 'px';
    index = videoCollectionsRender.length - 1;
  }

  if (index === videoCollectionsRender.length) {
    videoSliders.style.left = -(1 * 900) + 'px';
    index = 0;
  }

  allowShift = true;
};

const logicSlider = (imgPrev, imgNext, videoSliders, videoCollectionsRender) => {

  videoSliders.appendChild(videoCollectionsRender[0].cloneNode(true));
  videoSliders.insertBefore(videoCollectionsRender[videoCollectionsRender.length - 1].cloneNode(true), videoCollectionsRender[0]);

  imgPrev.onclick = () => shiftSlide(1, '');
  imgNext.onclick = () => shiftSlide(-1, '');
  videoSliders.onmousedown = dragStart;
  videoSliders.ontransitionend = checkIndex;
};

export { logicSlider };