import videoSrc from '../../assets/video/lake.mp4';
import songFirstSrc from '../../assets/audio/1_1.mp3';
import srcSecondSong from '../../assets/audio/1_2.mp3';

const links: Array<Ilink> = [
  {
    srcVideo: videoSrc,
    srcFirstSong: songFirstSrc,
    textFirstSong: 'Common Yellowthroat',
    srcSecondSong: srcSecondSong,
    textSecondSong: 'песня вторая',
  },

  {
    srcVideo: videoSrc,
    srcFirstSong: songFirstSrc,
    textFirstSong: 'Common Yellowthroat',
    srcSecondSong: srcSecondSong,
    textSecondSong: 'песня вторая',
  },

  {
    srcVideo: videoSrc,
    srcFirstSong: songFirstSrc,
    textFirstSong: 'Common Yellowthroat',
    srcSecondSong: srcSecondSong,
    textSecondSong: 'песня вторая',
  },

  {
    srcVideo: videoSrc,
    srcFirstSong: songFirstSrc,
    textFirstSong: 'Common Yellowthroat',
    srcSecondSong: srcSecondSong,
    textSecondSong: 'песня вторая',
  },

  {
    srcVideo: videoSrc,
    srcFirstSong: songFirstSrc,
    textFirstSong: 'Common Yellowthroat',
    srcSecondSong: srcSecondSong,
    textSecondSong: 'песня вторая',
  },

  {
    srcVideo: videoSrc,
    srcFirstSong: songFirstSrc,
    textFirstSong: 'Common Yellowthroat',
    srcSecondSong: srcSecondSong,
    textSecondSong: 'песня вторая',
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
