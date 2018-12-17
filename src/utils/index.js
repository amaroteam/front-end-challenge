const replaceValue = value => {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^\w]+/g, '-');
};

const friendlyURL = (name = '', color = '', style = '') => {
  return replaceValue(name)
    .concat(`-${replaceValue(color)}`)
    .concat(`-${style}`);
};

export default friendlyURL;
