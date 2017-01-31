var Amaro = Amaro || {};

Amaro.Utils = {

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

var Amaro = Amaro || {};

Amaro.Product = (function() {

  function Product(object) {
    this.name = object.name;
    this.image = object.image;
    this.price = object.actual_price;
    this.discountPercentage = object.discount_percentage;
  }

  Product.prototype.create = function(parent) {
    var element = document.createElement('div');

    element.setAttribute("class", "Product");
    element.innerHTML =
      this.getImage() +
      '<div class="Product__content">' +
        '<h3 class="Product__name">' +
          this.name +
        '</h3>' +
        '<div class="Product__price">' +
          '<span class="Product__price__number">' + this.price + '</span>' +
          this.getDiscount() +
        '</div>' +
      '</div>'
    ;

    parent.appendChild(element);
  };

  Product.prototype.getImage = function() {
    if(this.image) {
      return '<img class="Product__image" src="' + this.image + '">';
    }

    return '<img class="Product__image" src="dist/images/image-placeholder.svg">';
  };

  Product.prototype.getDiscount = function() {
    if(this.discountPercentage) {
      return (
        '<span class="Product__discount">' +
          Amaro.Utils.toCurrency(
            Amaro.Utils.newPrice(this.price, this.discountPercentage)
          ) +
        '</span>'
      );
    }

    return "";
  };

  return Product;

})();

var Amaro = Amaro || {};

Amaro.Grid = (function() {

  function Grid(element, data) {
    this.element = element;
    this.size = data.products.length;
    this.data = data.products;

    this.init();
  }

  Grid.prototype.init = function() {
    var self = this;

    this.data.map(function(p) {
      var product = new Amaro.Product(p);

      product.create(self.element);
    });
  };

  return Grid;

})();

var Amaro = Amaro || {};

Amaro.App = (function() {

  function App() {
    this.getData();
  }

  App.prototype.getData = function() {
    var self = this;

    fetch('/products.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      var grid = new Amaro.Grid(document.querySelector('.js-grid'), json);
    })
    .catch(function(err) {
      console.log(err);
    });
  };

  return App;

})();

window.addEventListener('DOMContentLoaded', function() {

  new Amaro.App();

});
