/**
 * Cart
 */
const localStorage = window.localStorage

function toFloat (stringValue) {
  return parseFloat(stringValue.replace(/[^0-9\.\,]/g, '').replace(',', '.'))
}

export function add (item) {
  let cart = {
    products: [...get().products, item],
    ammount: updateAmmount(item.actual_price)
  }

  return localStorage.setItem('cart', JSON.stringify(cart))
}

export function get () {
  if (!localStorage) {
    return 'You don\'t have support for localStorage'
  }

  if (!localStorage.getItem('cart')) {
    return {products: [], ammount: 0}
  }

  return JSON.parse(localStorage.getItem('cart'))
}

export function quantity () {
  return JSON.parse(get().length)
}

function updateAmmount (price) {
  price = toFloat(price)
  let prices = get().products.map(item => toFloat(item.actual_price))

  return [...prices, price].reduce((x, y) => x + y)
}

export function ammount () {
  if (!localStorage.getItem('cart')) {
    return 0
  }

  return get().ammount || 0
}
