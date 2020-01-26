const priceToNumber = price =>
  Number(price.replace(/[^0-9.-]+/g, ''));

export default priceToNumber;
