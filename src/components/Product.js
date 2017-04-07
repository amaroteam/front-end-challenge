import React from 'react'

const {
  string,
  number,
  bool,
  arrayOf,
  shape,
  func
} = React.PropTypes

const Product = ({
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
    <img width="200" height="250" src={image} />
    <h3>{name}</h3>
    <span>
      { on_sale ? actual_price + ' offer' : regular_price }
    </span>
    <ul>
      { sizes.map( s =>
          <li key={s.sku}>{s.size}</li> ) }
    </ul>
    <button onClick={ () =>
      onAddToCart( {
        id,
        name,
        regular_price,
        actual_price,
        on_sale } ) }> ADD TO CART </button>
  </div>
)

Product.PropTypes = {
  id: number.isRequired,
  name: string.isRequired,
  image: string.isRequired,
  regular_price: number.isRequired,
  actual_price: number.isRequired,
  on_sale: bool.isRequired,
  sizes: arrayOf(
    shape({
      available: bool.isRequired,
      size: string.isRequired,
      sku: string.isRequired
    }).isRequired
  ),
  onAddToCart: func.isRequired
}

export default Product