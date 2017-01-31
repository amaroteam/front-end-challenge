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
    );
  },

  toCurrency: function(price) {
    if(price == 0) {
      return 'R$ 0,00';
    }
    return 'R$ ' + price.toFixed(2).toString().replace(/(\w+).(\w+)/, '$1,$2');
  }
};

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
      document
        .querySelector('.js-modal-body')
        .querySelector('.js-buy-button')
        .addEventListener('click', function() {
          Amaro.Cart.addProduct({
            name: this.name,
            price: this.price
          });
          modal.close();
      }.bind(this));
    }.bind(this));
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
        '<button class="Modal__buy Button js-buy-button" >Comprar</button>' +
      '</div>'
    ;

    this.getSizes();

    parent.innerHTML = element;

    callback();
  };

  Product.prototype.getSizes = function() {
    var element =
      '<div class="Modal__sizes">' +
        '<h4 class="Modal__sizes__title">Tamanhos</h4>'
    ;

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
    this.closeBtn.addEventListener('click', function() {
      this.close();
    }.bind(this));
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

Amaro.Cart = {

  data: [],

  sum: 0,

  addProduct: function(obj) {
    Amaro.Cart.data.push(obj);

    Amaro.Cart.sum += Amaro.Utils.toPrice(obj.price);
  },

  show: function(parent, callback) {
    var element =
      '<div class="Cart">' +
        '<h2 class="Cart__title">Carrinho</h2>'
    ;

    Amaro.Cart.data.map(function(p) {
      var product =
        '<div class="Cart__item">' +
          '<span class="Cart__name">' +
            p.name +
          '</span>' +
          '<span class="Cart__price">' +
            p.price +
          '</span>' +
        '</div>'
      ;

      element += product;
    });

    element +=
      '<div class="Cart__total">Total: ' +
        Amaro.Utils.toCurrency(Amaro.Cart.sum) +
      '</div>'
    ;
    element += '</div>';
    parent.innerHTML = element;
    callback();
  },

  bind: function() {
    document.querySelector('.js-cart').addEventListener('click', function() {
      Amaro.Cart.show(document.querySelector('.js-modal-body'), function() {
        var modal = new Amaro.Modal(
          document.querySelector('.js-modal')
        );
        modal.open();
      });
    });
  }

};

var Amaro = Amaro || {};

Amaro.App = (function() {

  function App() {
    this.getData();
    Amaro.Cart.bind();
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
