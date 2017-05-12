import React from 'react'

import Product from './Product'

export default props => {
  return (
    <section className="products">
      <div className="container">
        <div className="row">
        {
          props.products.map(product => <Product key={product.code_color} item={product} />)
        }
        </div>
      </div>
    </section>
  )
}
