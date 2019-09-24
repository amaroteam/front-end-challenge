import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtda</th>
            <th>SubTotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                alt="produtofak"
                src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001883_019_catalog_1.jpg"
              />
            </td>
            <td>
              <strong>oculos roxo</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#f8c1b8" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#f3988a" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,50</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#f3988a" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>Total</span>
          <strong>R$1920,20</strong>
        </Total>
      </footer>
    </Container>
  );
}
