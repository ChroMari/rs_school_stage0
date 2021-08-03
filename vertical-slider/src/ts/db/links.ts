import videoSrc from '../../assets/video/butterfly.mp4';

const links: Array<Ilink> = [
  {
    srcVideo: videoSrc,
    srcFirstSong: '',
    textFirstSong: 'песня первая',
    srcSecondSong: '',
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
