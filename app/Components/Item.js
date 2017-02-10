import React from 'react'
import Icon from './Icon'

function handleImage (image) {
  return image || 'http://placehold.it/350x450/ffffff?text=:('
}

const Item = ({product, remove}) => (
  <div className="product-cart">
    <figure className="cover">
      <img className="image" src={handleImage(product.image)} alt={product.name} />
    </figure>

    <div className="product-info">
      <h2 className="title">
        {product.name}
        <button onClick={() => remove(product)}>
          <Icon name="trash" />
        </button>
      </h2>

      <div className="product-meta">
        <div className="quantities">
          <button className="control-increase">+</button>
          <input className="control-quantity" type="text" defaultValue={product.quantity} />
          <button className="control-decrease">-</button>
        </div>

        <p className="ammount">{product.actual_price}</p>
      </div>
    </div>
  </div>
)

export default Item
