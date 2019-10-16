import { translateToNumber } from '../../utils/number';

export function getPrices(list) {
  const result = {
    subTotal: 0,
    totalDiscount: 0,
    total: 0,
  };

  list.forEach(({ onSale, actualPrice, regularPrice, quantity }) => {
    const actualPriceValue = translateToNumber(actualPrice) * quantity;
    const regularPriceValue = translateToNumber(regularPrice) * quantity;

    if (onSale) {
      result.totalDiscount += regularPriceValue - actualPriceValue;
      result.total += actualPriceValue;
    } else {
      result.total += regularPriceValue;
    }

    result.subTotal += regularPriceValue;
  });

  return result;
}
