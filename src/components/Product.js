import React from 'react'
import Size from './Size'
import { Col, Image, Button, Glyphicon } from 'react-bootstrap'

const { string, number, bool, arrayOf, shape, func } = React.PropTypes

class Product extends React.Component {

  constructor(props) {
    super(props)
    this.state = { size: this.props.sizes.filter(s => s.available)[0] }
  }

  render() {

    let {
      name,
      image,
      defaultImage,
      sizes,
      on_sale,
      actual_price,
      regular_price,
      onAddToCart } = this.props

    let { size } = this.state

    let handleAddToCartClick = () => {
      onAddToCart({
        id: size.sku,
        name,
        image,
        price: on_sale ? actual_price : regular_price,
        size
      })
    }

    let handleSizeClick = size => {
      this.setState({ size })
    }

    return (
      <Col md={3} className="product">
        <Image src={ image || defaultImage } responsive/>
        <h5 className="name">{ name.toLowerCase() }</h5>
        <div> { on_sale ?
          <span>
            de <span className="price-scratched">
              { regular_price }</span> por <span className="price">
              { actual_price }</span>
          </span> :
          <span className="price">
            { regular_price }
          </span> }
        </div>
        <div>
          <Size
            sizes={ sizes
              .filter( s => s.available )
              .map( s => ({ ...s, id: s.sku }) ) }
            onClick={ handleSizeClick } />
        </div>
        <Button
          bsStyle="primary"
          onClick={ handleAddToCartClick }>
            <Glyphicon glyph="shopping-cart" /> Adicionar ao carrinho
        </Button>
      </Col> ) }

}

Product.PropTypes = {
  name: string.isRequired,
  image: string.isRequired,
  defaultImage: string.isRequired,
  regular_price: number.isRequired,
  actual_price: number.isRequired,
  on_sale: bool.isRequired,
  sizes: arrayOf(
    shape({
      available: bool.isRequired,
      size: string.isRequired,
      sku: string.isRequired
    }).isRequired
  ),
  onAddToCart: func.isRequired
}

export default Product