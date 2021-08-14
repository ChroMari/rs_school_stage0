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
    srcFirstSong: songSrc1_1,
    textFirstSong: 'The cry of a flying seagull',
    srcSecondSong: songSrc1_2,
    textSecondSong: 'The sound of the waves on the sea',
  },

  {
    srcFirstSong: songSrc2_1,
    textFirstSong: 'Summer field',
    srcSecondSong: songSrc2_2,
    textSecondSong: 'Common Yellowthroat butterfly',
  },

  {
    srcFirstSong: songSrc3_1,
    textFirstSong: 'Autumn forest atmosphere',
    srcSecondSong: songSrc3_2,
    textSecondSong: 'Stork preparing for departure',
  },

  {
    srcFirstSong: songSrc4_1,
    textFirstSong: 'Christmas is coming',
    srcSecondSong: songSrc4_2,
    textSecondSong: 'fire in the fireplace',
  },

  {
    srcFirstSong: songSrc5_1,
    textFirstSong: 'jungle nature',
    srcSecondSong: songSrc5_2,
    textSecondSong: 'small waterfall',
  },

  {
    srcFirstSong: songSrc6_1,
    textFirstSong: 'insects in the field',
    srcSecondSong: songSrc6_2,
    textSecondSong: 'wind on a hot day',
  },
];

export { links };

interface Ilink {
  srcFirstSong: string;
  textFirstSong: string;
  srcSecondSong: string;
  textSecondSong: string;
}
