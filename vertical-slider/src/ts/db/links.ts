import videoSrc1 from '../../assets/video/beach.mp4';
import videoSrc2 from '../../assets/video/butterfly.mp4';
import videoSrc3 from '../../assets/video/fall.mp4';
import videoSrc4 from '../../assets/video/fire.mp4';
import videoSrc5 from '../../assets/video/waterfall.mp4';
import videoSrc6 from '../../assets/video/grass.mp4';

import songSrc1_1 from '../../assets/audio/beach_1.mp3';
import songSrc1_2 from '../../assets/audio/beach_2.mp3';

import songSrc2_1 from '../../assets/audio/butterfly_1.mp3';
import songSrc2_2 from '../../assets/audio/butterfly_2.mp3';

import songSrc3_1 from '../../assets/audio/fall_1.mp3';
import songSrc3_2 from '../../assets/audio/fall_2.mp3';

import songSrc4_1 from '../../assets/audio/fire_1.mp3';
import songSrc4_2 from '../../assets/audio/fire_2.mp3';

import songSrc5_1 from '../../assets/audio/waterfall_1.mp3';
import songSrc5_2 from '../../assets/audio/waterfall_2.mp3';

import songSrc6_1 from '../../assets/audio/grass_1.mp3';
import songSrc6_2 from '../../assets/audio/grass_2.mp3';

const links: Array<Ilink> = [
  {
    srcVideo: videoSrc1,
    srcFirstSong: songSrc1_1,
    textFirstSong: 'Крик пролетающей чайки beach',
    srcSecondSong: songSrc1_2,
    textSecondSong: 'Приятный звук волн на море beach',
  },

  {
    srcVideo: videoSrc2,
    srcFirstSong: songSrc2_1,
    textFirstSong: 'Звук, который записан ночью в поле butterfly',
    srcSecondSong: songSrc2_2,
    textSecondSong: 'Common Yellowthroat butterfly',
  },

  {
    srcVideo: videoSrc3,
    srcFirstSong: songSrc3_1,
    textFirstSong: 'Атмосфера леса в осеннюю пору fall',
    srcSecondSong: songSrc3_2,
    textSecondSong: 'Звук, где аист готовится к перелету fall',
  },

  {
    srcVideo: videoSrc4,
    srcFirstSong: songSrc4_1,
    textFirstSong: 'Музыка на Новый год для фона без слов fire',
    srcSecondSong: songSrc4_2,
    textSecondSong: 'Треск огня в камине fire',
  },

  {
    srcVideo: videoSrc5,
    srcFirstSong: songSrc5_1,
    textFirstSong: 'Джунгли днем: насекомые, птицы, дневные сверчки, утки waterfall',
    srcSecondSong: songSrc5_2,
    textSecondSong: 'Звук маленького водопада waterfall',
  },

  {
    srcVideo: videoSrc6,
    srcFirstSong: songSrc6_1,
    textFirstSong: 'Звук насекомых в поле ночью grass',
    srcSecondSong: songSrc6_2,
    textSecondSong: 'Звук обычного ветра в поле в жаркий день grass',
  },
];

export { links };

interface Ilink {
  srcVideo: string;
  srcFirstSong: string;
  textFirstSong: string;
  srcSecondSong: string;
  textSecondSong: string;
}
