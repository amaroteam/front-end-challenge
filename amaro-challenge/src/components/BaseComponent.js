import React, { Component } from 'react';
import { connect } from 'react-router';

class Base extends Component {

  render() {
    return (
      <div>

        {this.props.children}
        
      </div>
    )
  }
}

export default Base;
