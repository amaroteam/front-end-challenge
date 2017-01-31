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
