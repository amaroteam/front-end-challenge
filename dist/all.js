var Amaro = Amaro || {};

Amaro.Product = (function() {

  function Product(object) {
    this.name = object.name;
    this.image = object.image;
    this.price = object.actual_price;
    this.discountPercentage = object.discountPercentage;
  }

  Product.prototype.create = function(parent) {
    var element = document.createElement('div');

    element.setAttribute("class", "Product");

    if(this.image) {
      var image = '<img class="Product__image" src="' + this.image + '">';
    } else {
      var image = '<img class="Product__image" src="dist/images/image-placeholder.svg">';
    }

    element.innerHTML =
      image +
      '<div class="Product__content">' +
        '<h3 class="Product__name">' +
          this.name +
        '</h3>' +
        '<div class="Product__price">' +
          '<span class="Product__price__number">' + this.price + '</span>' +
        '</div>'
      '</div>'
    ;

    parent.appendChild(element);
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
