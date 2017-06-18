import React, { Component } from 'react';
import { products } from '../data/products.json';
import ProductCard from './ProductCardComponent'
import styled from 'styled-components';

const FilterDiv = styled.div `
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 50px;
  span {
    border: .1px solid #000;
    margin: 10px;
    padding: 5px;
    cursor: pointer;
  }
  .on-sale-filter-selected, span:hover {
    background-color: #000;
    color: #FFF;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-right: 0;
  }
`

class Catalog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      onSaleSelected: false
    }
  }

  render() {

    const filterBy = () => {
      if (this.state.onSaleSelected) {
        return product => product.on_sale;
      }
      return product => product;
    }

    return (
      <div>
        <FilterDiv>
          <span className={this.state.onSaleSelected ? "on-sale-filter-selected" : null} onClick={() => this.setState({onSaleSelected: !this.state.onSaleSelected})}>On sale products</span>
        </FilterDiv>
        <div style={{display: "flex", flexDirection: "column", flexFlow: "row wrap"}}>
          {products.filter(filterBy()).map((product, id) => {
            return (
              <ProductCard key={id} product={product} />
            )
          })}
        </div>
      </div>

    )
  }
}

export default Catalog;
