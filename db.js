/* eslint-disable func-names */
/* eslint-disable global-require */
module.exports = function() {
  return {
    products: require('./products.json'),
    minicart: require('./minicart.json'),
  };
};
