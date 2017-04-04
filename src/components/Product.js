import React from 'react'

const Produto = ({
  id,
  name,
  image,
  regular_price,
  actual_price,
  on_sale,
  sizes,
  onAddToCart
}) => (
  <div>
    <img src={image} />
    <h3>{name}</h3>
    <span>
      R$
      { on_sale ? actual_price + ' offer' : regular_price }
    </span>
    <ul>
      { sizes.map(s => <li>{s.size}</li>) }
    </ul>
    <button onClick={() => onAddToCart(id)}>
      ADD TO CART
    </button>
  </div>
)

export default Produto