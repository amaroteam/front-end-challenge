import React from 'react';

import { Container } from './styles.js';

export default function CartAside() {
  return (
    <Container>
      <aside class="app__cart app__cart--visible">
        <div class="app__cart__wrapper">
          <header class="app__cart__header">
            <a href="#close">
              <i class="i-close"></i>
            </a>
            <h4>
              <span>Sacola (0)</span>
            </h4>
            <a href="#help">
              <i class="i-question-circle-o"></i>
            </a>
          </header>
          <div class="app__help-menu">
            <a
              href="tel:551132304500"
              class="btn-icon"
              data-name="cartHelpClick"
              data-label="SAC"
            >
              <i class="i-phone"></i>(11) 3230-4500
            </a>
            <a
              href="#chat"
              class="btn-icon"
              data-name="cartHelpClick"
              data-label="Chat"
            >
              <i class="i-commenting-o"></i>
              <span>Chat</span>
            </a>
            <a
              href="mailto:sac@amaro.com"
              class="btn-icon"
              data-name="cartHelpClick"
              data-label="Email"
            >
              <i class="i-envelope-o"></i>
              <span>E-mail</span>
            </a>
            <a
              href="https://about.amaro.com/help"
              class="btn-icon"
              target="_blank"
              rel="noopener"
              data-name="cartHelpClick"
              data-label="FAQ"
            >
              <i class="i-question-circle-o"></i>
              <span>FAQ</span>
            </a>
          </div>
          <main class="app__cart__main">
            <div class="app__cart__empty">
              <i class="i-shopping-bag"></i>
              <p>Sua sacola está vazia :(</p>
              <a
                class="btn btn-outline-primary"
                data-name="cartBuyMore"
                href="/newin"
              >
                <span>Comprar mais</span>
              </a>
            </div>
          </main>
        </div>
      </aside>
    </Container>
  );
}
