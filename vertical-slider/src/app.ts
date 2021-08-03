import { VideoView } from './ts/view/VideoView';
import { links } from './ts/db/links';
import { SongView } from './ts/view/SongView';

import './styles/style.sass';

const root = document.getElementById('root');

const info = document.createElement('div'); // общий контейнер с информацией
info.classList.add('info');

const h1 = document.createElement('h1');
h1.classList.add('info__title');
h1.textContent = 'SoundsApp';
info.appendChild(h1);

const videoCollections: Array<VideoView> = [];
const songCollections: Array<SongView> = [];
links.map((item) => {
  videoCollections.push(new VideoView(item.srcVideo));
  //  массив с классами в количестве 6 различных тем
  songCollections.push(
    new SongView(item.srcFirstSong, item.textFirstSong, item.srcSecondSong, item.textSecondSong)
  );
  // массив с музыкой в количестве 6 различных тем
  return item;
});

info.appendChild(videoCollections[0].render());
info.appendChild(songCollections[0].render());

if (root) root.appendChild(info);
