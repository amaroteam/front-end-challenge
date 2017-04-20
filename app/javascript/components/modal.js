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
