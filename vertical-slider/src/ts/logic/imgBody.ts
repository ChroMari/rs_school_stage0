const imgBody = (img: HTMLImageElement): void => {
  const { body } = document;
  if (body) body.style.backgroundImage = `url(${img.src})`;
};

export { imgBody };
