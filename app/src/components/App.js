import React from 'react'

import Logo from './Logo'

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <Logo width="150px" height="44px" color="#222" />
            <div className="header-meta">
              <input className="header-search" type="text" placeholder="search" />
              <button className="header-cart">
                <span className="header-count">999</span>
                <span className="ion-ios-cart-outline"></span>
              </button>
            </div>
          </div>
        </header>

        <section className="products">
          <div className="container">
            <div className="row">
            {
              [1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <section key={i} className="product">
                  <figure className="product-cover">
                    <img src="https://d2odcms9up7saa.cloudfront.net/appdata/images/products/20002605_615_catalog_1.jpg?1460136912" alt="Nome do produto"/>
                  </figure>
                  <div className="product-meta">
                    <h3 className="product-title">Nome do produto</h3>
                    <div className="product-prices">
                      <p><strong>por: R$ 69,90</strong> ou 3x de R$ 25,00</p>
                      <p><small>de: R$ 100,00</small> <span>(50% off)</span></p>
                    </div>
                    <div className="product-sizes">
                      <a href="#">p</a>
                      <a href="#">s</a>
                    </div>
                  </div>
                  <button className="product-buy">
                    <span>Comprar</span>
                  </button>
                </section>
              ))
            }
            </div>
          </div>
        </section>

        <section className="cart-container">
          <div className="cart">
            <div className="cart-title">
              <h3>Carrinho</h3>
              <button>&times;</button>
            </div>

            <div className="cart-products">
              <section className="product on-cart">
                <figure className="product-cover">
                  <img src="https://d2odcms9up7saa.cloudfront.net/appdata/images/products/20002605_615_catalog_1.jpg?1460136912" alt="Nome do produto"/>
                </figure>
                <div className="product-meta">
                  <div className="product-title">
                    <h3>Nome do produto</h3>
                    <button className="product-remove">&times;</button>
                  </div>

                  <div className="product-prices">
                    <div className="product-quantity">
                      <input type="text" value="999" />
                      <button className="product-increase">+</button>
                      <button className="product-decrease">-</button>
                    </div>
                    <strong>R$ 69,90</strong>
                  </div>
                </div>
              </section>
            </div>

            <div className="cart-meta">
              <div className="cart-total">
                <span>Total: </span> <strong>R$ 15,00</strong>
              </div>
              <button className="cart-end">Pagamento</button>
            </div>
          </div>


        </section>
      </div>
    )
  }
}

export default App
