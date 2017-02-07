import React from 'react'

import Logo from './Logo'
import Icon from './Icon'

// Responsivo.
// Todos os produtos devem ser mostrados.
// Tem que aparecer (imagen, Nome, Preço, Status da promoção, Preço promocional, Tamanhos disponíveis).
// Adicionar produto ao carrinho.
// Verificar quantos e quais produtos no carrinho.

// Adicionar/Remover produtos
// Alterar a quantidade de produtos
// Mostrar valor total do carrinho
// Mostrar tamanhos em estoque
// Testes (?)

export default class Home extends React.Component {
  render () {
    return (
      <main className="main-container">
        <header className="main-header">
          <Logo width="150px" height="80px" viewBox="0 0 260 45" color={'#111'} />

          <button className="header-cart">
            <Icon name="cart" />
            <span className="indicator">03</span>
          </button>
        </header>

        <section className="products-list">
          {
            [1, 2, 3, 4].map(i => (
              <div className="card-product">
                <span className="onsale">12%</span>

                <figure className="cover">
                  <img className="image" src="http://placehold.it/350x450" alt="Titulo do product" />
                </figure>

                <div className="product-meta">
                  <h2 className="title">Nome do produto</h2>

                  <div className="product-price">
                    <del className="normal">R$ 399,00</del>
                    <p className="ammount">R$ 299,00</p>
                    <small className="installments">3x de R$ 50,00</small>
                  </div>

                  <button className="product-buy">
                    <span>Adicionaro ao carrinho</span>
                    <Icon name="cart" />
                  </button>
                </div>
              </div>
            ))
          }
        </section>

        <div className="main-cart">
          <div className="cart-mask"></div>

          <div className="cart-container">
            <div className="cart-list">
              <header className="cart-header">
                <p>Carrinho</p>
                <button className="cart-close">&times;</button>
              </header>

              <div className="list">
                {
                  [1, 2, 3, 4, 5].map(i => (
                    <div className="product-cart">
                      <figure className="cover">
                        <img className="image" src="http://placehold.it/100x120" alt="Titulo do product"/>
                      </figure>

                      <div className="product-info">
                        <h2 className="title">Nome do produto</h2>

                        <div className="product-meta">
                          <div className="quantities">
                            <button className="control-increase">+</button>
                            <input className="control-quantity" type="text" value={i} />
                            <button className="control-decrease">-</button>
                          </div>

                          <p className="ammount">R$ 1.299,00</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="cart-checkout">
              <p className="cart-ammount"><strong>Total: </strong> <span>R$ 200,00</span></p>
              <button className="checkout">Finalizar Compra</button>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
