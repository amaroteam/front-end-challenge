/*eslint-disable no-console, no-var, no-unused-expressions no-console, func-names, prefer-arrow-callback, object-shorthand */

var timer = 2500;
var wait = 1000;

module.exports = {
  after: function(browser) {
    console.log('Closing down...');
    browser.end();
  },

  'should be able to init a session': browser => {
    browser
      .url('http://localhost:3030/')
      .resizeWindow(1280, 800)
      .waitForElementVisible('#react', timer);
  },

  'should be able to see the component UI': browser => {
    browser.assert.elementPresent('.app');
  },

  'should be able to see the Products UI': browser => {
    browser.assert.elementPresent('.app__products');
  },

  'should be able to see all the products': browser => {
    browser.assert.elementPresent('.app__grid');
    browser.elements('css selector', '.app__grid > div', result => {
      browser.assert.equal(result.value.length, 22, 'There should be 22 products');
    });
  },

  'should be able to open and close a product': browser => {
    browser.click('.app__box:nth-of-type(3)');

    browser.pause(wait);

    browser
      .waitForElementVisible('.modal-close', timer)
      .click('.modal-close');
  },

  'should be able to open a product, select a size and buy': browser => {
    browser.pause(wait);

    browser.click('.app__box:nth-of-type(4)');

    browser
      .waitForElementVisible('.app__product__sizes__chooser', timer)
      .click('.app__product__sizes__chooser a:not(.disabled)');

    browser.pause(wait);

    browser
      .click('.app__product__actions .btn-primary');
  },

  'should be able to see the cart': browser => {
    browser
      .waitForElementVisible('.app__cart', timer);

    browser.elements('css selector', '.app__item', result => {
      browser.assert.equal(result.value.length, 1, 'Cart has only one item');
    });

    browser.pause(wait);

    browser
      .click('.app__cart__header a');
  },

  'should be able to add another product to the cart': browser => {
    browser.pause(wait);

    browser.click('.app__box:nth-of-type(1)');

    browser
      .waitForElementVisible('.app__product__sizes__chooser', timer)
      .click('.app__product__sizes__chooser a:not(.disabled)');

    browser.pause(wait);

    browser
      .click('.app__product__actions .btn-primary');
  },

  'should be able to see the cart again': browser => {
    browser
      .waitForElementVisible('.app__cart', timer);
  },

  'should be able to match the cart items and values': browser => {
    browser.pause(wait);
    browser.elements('css selector', '.app__item', result => {
      browser.assert.equal(result.value.length, 2, 'Cart has two items');
    });

    browser
      .assert.containsText('.app__cart__subtotal span:nth-child(2)', 'R$ 349,80')
      .assert.containsText('.app__cart__shipping span:nth-child(2)', 'R$ 14,99')
      .assert.containsText('.app__cart__total span:nth-child(2)', 'R$ 364,79');
  },

  'should be able to purchase the cart': browser => {
    browser.click('.app__cart__actions .btn-primary');

    browser.pause(wait);

    browser
      .assert.cssClassPresent('.app__notifications', 'active')
      .assert.containsText('.app__notifications__message', 'Compra efetuada com sucesso');

    browser.elements('css selector', '.app__item', result => {
      browser.assert.equal(result.value.length, 0, 'Cart is empty');
    });
  }
};
