import React from 'react';

let list = [];

export const actionProduct = (product) => {
    let view = mountTable(product);
    return {
        type: 'PRODUCT_SELECTED',
        payload: view
    }
};

const listProduct = (product) => {
  list.push(product);

  return list;
}

const hasImage = (image) => {
  image = image ? image : "http://www.fodensband.co.uk/assets/Uploads/_resampled/croppedimage200280-no-image.jpg?";

  return image;
}

const mountTable = (product) => {
    let view;

    view = listProduct(product).map( (product, key) => {
      product.image = hasImage(product.image);
      return (
          <tr key={key}>
            <td><img role="presentation" src={product.image} /></td>
            <td><h6>{product.name}</h6></td>
            <td><h6>{product.actual_price}</h6></td>
          </tr>
      )
    });

    return view;
}
