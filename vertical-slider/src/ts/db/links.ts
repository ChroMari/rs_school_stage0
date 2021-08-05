import videoSrc from '../../assets/video/lake.mp4';
import songFirstSrc from '../../assets/audio/1_1.mp3';

const links: Array<Ilink> = [
  {
    srcVideo: videoSrc,
    srcFirstSong: songFirstSrc,
    textFirstSong: 'Common Yellowthroat',
    srcSecondSong: songFirstSrc,
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
