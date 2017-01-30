var Amaro = Amaro || {};

Amaro.App = (function() {

  function App() {
    this.data = null;
    this.getData();
  }

  App.prototype.getData = function() {
    var self = this;

    fetch('/products.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      self.data = json;
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

var Amaro = Amaro || {};

Amaro.Product = (function() {

  function Product(object) {
    this.name = object.name;
    this.image = object.image;
    this.price = object.price;
    this.discountPercentage = object.discountPercentage;
  }

  Product.prototype.create = function(parent) {
    var element = document.createElement('div');

    element.setAttribute("class", "Product");
    element.innerHTML =
      '<img class="Product__image" src="' + this.image + '">' +
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
