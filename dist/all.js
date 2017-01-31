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
          '<span class="Product__price__number' +
            this.hasDiscount() +
          '">' + this.price + '</span>' +
          this.getDiscount() +
        '</div>' +
      '</div>'
    ;

    element.addEventListener('click', this.showModal);

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

  Product.prototype.showModal = function() {
    var modal = new Amaro.Modal(document.querySelector('.js-modal'));

    modal.open();
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

Amaro.Modal = (function() {

  function Modal(element) {
    this.element = element;
    this.closeBtn = this.element.querySelector('.js-modal-close');

    this.bind();
  }

  Modal.prototype.bind = function() {
    var self = this;

    this.closeBtn.addEventListener('click', function() {
      self.close();
    });
  };

  Modal.prototype.open = function() {
    Amaro.Utils.addClass(this.element, 'is-open');
  };

  Modal.prototype.close = function() {
    Amaro.Utils.removeClass(this.element, 'is-open');
  };

  return Modal;

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
