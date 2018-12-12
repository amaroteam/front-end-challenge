const friendlyURL = (name = '', style = '') => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, '-')
    .concat(`-${style}`);
};

export default friendlyURL;
