export function translateToNumber(price) {
  const value = price.split('R$ ')[1];
  const floatValue = parseFloat(value.replace(',', '.'));

  return floatValue;
}

export function translateToReal(number) {
  const result = number
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  return `R$ ${result}`;
}
