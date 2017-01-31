var Amaro = Amaro || {};

Amaro.Utils = {

  addClass: function(element, className) {
    if (!new RegExp('(\\s|^)' + className + '(\\s|$)').test(element.className)) {
        element.className += ' ' + className;
    }
  },

  removeClass: function(element, className) {
     element.className = element.className.replace(new RegExp('(\\s+|^)' + className + '(\\s+|$)', 'g'), ' ').replace(/^\s+|\s+$/g, '');
  },

  percentage: function(str) {
    return parseInt(
      str.slice(0, 1)
    );
  },

  removeCurrency: function(str) {
    return str.slice(3, str.length);
  },

  toFloat: function(str) {
    return parseFloat(
      str.replace(/(\w+),(\w+)/, '$1.$2')
    );
  },

  toPrice: function(str) {
    return Amaro.Utils.toFloat(Amaro.Utils.removeCurrency(str));
  },

  newPrice: function(oldPrice, discount) {
    return (
      Amaro.Utils.toPrice(oldPrice) -
      (
        Amaro.Utils.toPrice(oldPrice) *
        Amaro.Utils.percentage(discount)/100
      )
    ).toFixed(2);
  },

  toCurrency: function(price) {
    return 'R$ ' + price.replace(/(\w+).(\w+)/, '$1,$2');
  }
};
