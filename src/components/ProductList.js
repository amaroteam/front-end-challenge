import React from 'react'
import Product from './Product'

const { array, func, string, number } = React.PropTypes

const ProductList = ({ products, defaultImage, status, onAddedToCart }) => {

  if (status === 0)
    return (
      <h3>Não foi possível retornar os produtos :(</h3> )

  if (status === 2)
    return (
      <h3>Carregando...</h3> )

  return (
    <div className="row">
      { products.map( p =>
        <Product
          key={ p.id }
          defaultImage={ defaultImage }
          { ...p }
          onAddToCart={onAddedToCart}
        /> ) }
    </div> )
}

ProductList.PropTypes = {
  products: array.isRequired,
  defaultImage: string.isRequired,
  status: number.isRequired,
  onAddedToCart: func
}

export default ProductList