import React from 'react'

const Cart = (items, visible) => {
  let classCart = 'cart-container'

  if (visible) {
    classCart += ' is-visible'
  }

  return (
    <div className={classCart}>
      <div className="cart-main">
        {
          // @TODO: Create function to render this
          items.map(item => (
            <div className="cart-product">
              <figure className="image">
                <img src={item.image} alt={item.name} />
              </figure>

              <h3>{item.name}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
