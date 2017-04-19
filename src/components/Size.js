import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

const { arrayOf, shape, string, bool, func } = React.PropTypes

class Size extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      size: this.props.sizes ? this.props.sizes[0].id : ''
    }
  }

  render() {

    let { sizes, onClick } = this.props

    return (
      <ButtonGroup bsSize="xsmall">
        { sizes.map( s =>
            <Button
              key={s.id}
              active={ this.state.size === s.id }
              onClick={ () => {
                this.setState({ size: s.id })
                onClick(s)
              } }>
                {s.size}
            </Button> ) }
      </ButtonGroup> ) }

}

Size.PropTypes = {
  sizes: arrayOf(
    shape({
      id: string,
      size: string,
      available: bool } ) ).isRequired,
  onClick: func.isRequired
}

export default Size