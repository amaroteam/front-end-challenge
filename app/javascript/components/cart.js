var Amaro = Amaro || {};

Amaro.Cart = {

  data: [],

  addProduct: function(obj) {
    Amaro.Cart.data.push(obj);
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
