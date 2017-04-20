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
