const filterStyles = [
  {
    name: 'normal',
    filter: ['blur(0px)', 'invert(0%)', 'sepia(0%)', 'saturate(100%)', 'hue-rotate(0deg)', 'brightness(100%)', 'contrast:(100%)'],
  },
  {
    name: 'black & white',
    filter: ['blur(0px)', 'invert(0%)', 'sepia(0%)', 'saturate(0%)', 'hue-rotate(0deg)', 'brightness(150%)', 'contrast(150%)'],
  },
  {
    name: 'sepia',
    filter: ['blur(0px)', 'invert(0%)', 'sepia(100%)', 'saturate(150%)', 'hue-rotate(0deg)', 'brightness(100%)', 'contrast(150%)'],
  },
  {
    name: 'warm colors',
    filter: ['blur(0px)', 'invert(0%)', 'sepia(50%)', 'saturate(200%)', 'hue-rotate(15deg)', 'brightness(100%)', 'contrast(150%)'],
  },
  {
    name: 'cold colors',
    filter: ['blur(0px)', 'invert(0%)', 'sepia(75%)', 'saturate(300%)', 'hue-rotate(180deg)', 'brightness(100%)', 'contrast(150%)'],
  },
  {
    name: 'green color tint',
    filter: ['blur(0px)', 'invert(0%)', 'sepia(75%)', 'saturate(300%)', 'hue-rotate(30deg)', 'brightness(100%)', 'contrast(150%)'],
  },
];

export default filterStyles;
