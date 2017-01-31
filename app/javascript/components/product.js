var Amaro = Amaro || {};

Amaro.Product = (function() {

  function Product(object) {
    this.object = object;
    this.name = object.name;
    this.image = object.image;
    this.price = object.actual_price;
    this.discountPercentage = object.discount_percentage;
    this.sizes = object.sizes;
  }

  Product.prototype.create = function(parent) {
    var element = document.createElement('div');
    var self = this;

    element.setAttribute("class", "Product");
    element.innerHTML =
      this.getImage() +
      '<div class="Product__content">' +
        '<h3 class="Product__name">' +
          this.name +
        '</h3>' +
        '<div class="Product__price">' +
          '<span class="Product__price__number' +
            this.hasDiscount() +
          '">' + this.price + '</span>' +
          this.getDiscount() +
        '</div>' +
      '</div>'
    ;

    element.addEventListener('click', this.showModal.bind(this));

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

  Product.prototype.hasDiscount = function() {
    if(this.discountPercentage) {
      return " Product__price__number--crossed"
    }

    return "";
  };

  Product.prototype.showModal = function(e) {
    var modalElement = document.querySelector('.js-modal');
    var modal = new Amaro.Modal(modalElement);
    var modalBody = modalElement.querySelector('.js-modal-body');

    this.fillModal(modalBody, function() {
      modal.open();
    });
  };

  Product.prototype.fillModal = function(parent, callback) {
    var element =
      '<div class="Modal__image">' +
        this.getImage() +
      '</div>' +
      '<div class="Modal__content">' +
        '<h2 class="Modal__product__name">' + this.name + '</h2>' +
        '<div class="Modal__price">' +
          '<span class="Modal__price__number' +
            this.hasDiscount() +
          '">' + this.price + '</span>' +
          this.getDiscount() +
        '</div>' +
        this.getSizes() +
        '<button class="Modal__buy Button">Comprar</button>' +
      '</div>'
    ;

    this.getSizes();

    parent.innerHTML = element;

    callback();
  };

  Product.prototype.getSizes = function() {
    var element = '<div class="Modal__sizes">';

    this.sizes.map(function(s) {
      if(s.available) {
        var sizeItem =
          '<div class="Modal__sizes__item">' +
            s.size +
          '</div>';
        ;

        element += sizeItem;
      }
    });

    return element + '</div>';
  };

  return Product;

})();
