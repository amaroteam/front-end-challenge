import React from 'react'

export default props => {
  const { item } = props

  return (
    <section className="product">
      <figure className="product-cover">
        {
          item.image
            ? (<img src={item.image} alt={item.name}/>)
            : <span className="ion-image"></span>
        }
      </figure>
      <div className="product-meta">
        <h3 className="product-title">{item.name}</h3>
        <div className="product-prices">
          <p><strong>por: {item.actual_price}</strong> ou {item.installments}</p>
          {
            item.on_sale
              ? (<p><small>de: {item.regular_price}</small> <span>({item.discount_percentage})</span></p>)
              : null
          }
        </div>
        <div className="product-sizes">
          {
            item.sizes.filter(size => {
              return size.available
            }).map(({size, sku}) => <a key={sku} href="#">{size}</a>)
          }
        </div>
      </div>
      <button className="product-buy" onClick={() => props.buy(item)}>
        <span>Comprar</span>
      </button>
    </section>
  )
}