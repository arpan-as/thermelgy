// const availableColors = [
//   'blue',
//   'indigo',
//   'purple',
//   'pink',
//   'red',
//   'orange',
//   'yellow',
//   'green',
//   'teal',
//   'cyan',
//   'white',
//   'gray',
//   'gray-dark',
//   'primary',
//   'secondary',
//   'success',
//   'info',
//   'warning',
//   'danger',
//   'light',
//   'dark',
// ];

// function convertHex(hex){
//   let r, g, b, result = '';
//   hex = hex.replace('#','');
//   r = parseInt(hex.substring(0,2), 16);
//   g = parseInt(hex.substring(2,4), 16);
//   b = parseInt(hex.substring(4,6), 16);

//   result = 'rgb('+r+','+g+','+b+')';
//   return result;
// }

export const getColor = (availableColor = 'primary') => {
  if (typeof window === 'undefined') {
    return null;
  }

  const color = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(`--${availableColor}`);

  return color;
};

export const getThemeColors = () => [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
];
