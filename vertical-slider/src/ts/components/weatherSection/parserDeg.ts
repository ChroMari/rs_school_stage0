const parserDeg = (deg: number): string => {
  const sectors = [
    'Northerly',
    'North Easterly',
    'Easterly',
    'South Easterly',
    'Southerly',
    'South Westerly',
    'Westerly',
    'North Westerly',
  ];

  let degree = deg;
  degree += 22.5;

  if (degree < 0) degree = 360 - (Math.abs(degree) % 360);
  else degree %= 360;

  const which = parseInt(String(degree / 45), 10);
  return sectors[which];
};

export { parserDeg };
