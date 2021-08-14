import { SoundsApp } from './ts/SoundsApp';

import './styles/style.sass';

const root = document.getElementById('root');

const soundsAppClass = new SoundsApp();
soundsAppClass.render();

if (root) {
  root.appendChild(soundsAppClass.headerView);
  root.appendChild(soundsAppClass.videoView);
  root.appendChild(soundsAppClass.sliderView);
  root.appendChild(soundsAppClass.informationInner);
}
