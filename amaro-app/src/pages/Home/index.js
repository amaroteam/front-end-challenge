import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          alt="sapato"
          src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001883_019_catalog_1.jpg"
        />
        <strong>Renis legal</strong>
        <span>R$120</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#000" />2
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>{' '}
      <li>
        <img
          alt="sapato"
          src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001883_019_catalog_1.jpg"
        />
        <strong>Renis legal</strong>
        <span>R$120</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#000" />2
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>{' '}
      <li>
        <img
          alt="sapato"
          src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001883_019_catalog_1.jpg"
        />
        <strong>Renis legal</strong>
        <span>R$120</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#000" />2
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>{' '}
      <li>
        <img
          alt="sapato"
          src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001883_019_catalog_1.jpg"
        />
        <strong>Renis legal</strong>
        <span>R$120</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#000" />2
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>{' '}
      <li>
        <img
          alt="sapato"
          src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001883_019_catalog_1.jpg"
        />
        <strong>Renis legal</strong>
        <span>R$120</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#000" />2
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>{' '}
      <li>
        <img
          alt="sapato"
          src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001883_019_catalog_1.jpg"
        />
        <strong>Renis legal</strong>
        <span>R$120</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#000" />2
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
