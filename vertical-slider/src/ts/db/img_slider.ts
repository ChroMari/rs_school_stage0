import img1 from '../../assets/img/beach.jpg';
import img2 from '../../assets/img/butterfly.jpeg';
import img3 from '../../assets/img/fall.jpg';
import img4 from '../../assets/img/fire.jpg';
import img5 from '../../assets/img/waterfall.jpg';
import img6 from '../../assets/img/grass.jpg';

const imgSlider: Array<IimgSlider> = [
  {
    src: img1,
  },
  {
    src: img2,
  },
  {
    src: img3,
  },
  {
    src: img4,
  },
  {
    src: img5,
  },
  {
    src: img6,
  },
];

export { imgSlider };

interface IimgSlider {
  src: string;
}
