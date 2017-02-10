/**
 * Cart
 */
const localStorage = window.localStorage

function toFloat (stringValue) {
  return parseFloat(stringValue.replace(/[^0-9\.\,]/g, '').replace(',', '.'))
}

export function add (item) {
  let update = [...get().products, item]

  let cart = {
    products: update,
    ammount: updateAmmount(update)
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

export function remove (item) {
  let update = get().products.filter(i => i.id !== item.id)
  let cart = {
    products: update,
    ammount: updateAmmount(update)
  }

  return localStorage.setItem('cart', JSON.stringify(cart))
}

export function quantity () {
  return JSON.parse(get().length)
}

export function ammount () {
  if (!localStorage.getItem('cart')) {
    return 0
  }

  return get().ammount || 0
}

function updateAmmount (products) {
  let prices = products.map(item => toFloat(item.actual_price))
  return prices.reduce((x, y) => x + y, 0)
}
