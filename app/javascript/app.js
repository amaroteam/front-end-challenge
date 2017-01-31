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
