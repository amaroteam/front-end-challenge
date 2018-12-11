import slugfy from './slugfy';

export const getLastPath = pathname => pathname.split('/').pop();

export const filterProductBySlug = (pathname, data, callback) => {
  const slug = slugfy(getLastPath(pathname));
  return callback(data)
    .then(products => products.filter(product => slugfy(product.name) === slug))
    .then(product => product.reduce(single => single));
};

export const removeItemBySlug = (itemName, arrayOfItems) => arrayOfItems
  .filter(item => slugfy(item.name) !== slugfy(itemName));

export const groupItemsBySlug = (itemName, arrayOfItems) => arrayOfItems
  .filter(item => slugfy(item.name) === slugfy(itemName));

export const findIndexBySlug = (itemName, arrayOfItems) => arrayOfItems
  .findIndex(item => slugfy(item.name) === slugfy(itemName));

export const sortByItemName = items => items
  .sort((a, b) => a.name.localeCompare(b.name));

export const searchByTerms = (searchTerm, items) => items
  .filter((item) => {
    const itemNameLowerCase = item.name.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return itemNameLowerCase.includes(searchTermLowerCase);
  });

export const sumItemsPrice = (items) => {
  const totalPrice = (items.reduce((acc, item) => {
    const priceWithoutCurrency = item.actual_price.replace('R$ ', '').replace(',', '.');
    const priceToFloat = parseFloat(priceWithoutCurrency);
    return acc + priceToFloat;
  }, 0)).toFixed(2).replace('.', ',');

  return totalPrice;
};

export const groupRepeatedProducts = (cart, product) => {
  const repeated = cart.find(cartItem => cartItem.selectedSize === product.selectedSize);

  if (!repeated) {
    cart.push({ ...product, quantity: 1 });
    return cart;
  }

  repeated.quantity += 1;
  return cart;
};
