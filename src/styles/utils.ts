export const retina = `@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 only screen and (min--moz-device-pixel-ratio: 1.5),
 only screen and (-o-min-device-pixel-ratio: 1.5/1),
 only screen and (min-resolution: 144dpi),
 only screen and (min-resolution: 1.5dppx)`;

type TypeConvertHexToRGBA = (hex: string, opacity: number) => string;

export const convertHexToRGBA: TypeConvertHexToRGBA = (hex, opacity) => {
  const value = hex.replace('#', '');

  const R = parseInt(value.substring(0, 2), 16);
  const G = parseInt(value.substring(2, 4), 16);
  const B = parseInt(value.substring(4, 6), 16);

  return `rgba(${R},${G},${B},${opacity})`;
};

export const isMobileView = (userAgent: string) => Boolean(
  userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  )
);
