import slugfy from './slugfy';

export const productSlugFilter = (slug, data, callback) => (
  callback(data)
    .then(products => products.filter(product => slugfy(product.name) === slug))
);
