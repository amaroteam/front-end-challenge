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
