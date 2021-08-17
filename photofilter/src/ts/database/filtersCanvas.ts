const filtersCanvas: IfilterCanvas = {
  blur: '(0px)',
  invert: '(0%)',
  sepia: '(0%)',
  saturate: '(100%)',
  hue_rotate: '(0deg)',
  brightness: '(100%)',
  contrast: '(100%)',
};

interface IfilterCanvas {
  blur: string;
  invert: string;
  sepia: string;
  saturate: string;
  hue_rotate: string;
  brightness: string;
  contrast: string;
}

export { filtersCanvas, IfilterCanvas };
