import React, { Component } from 'react';
import { connect } from 'react-router';
import styled from 'styled-components';
import Header from './HeaderComponent'

class Base extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}

      </div>
    )
  }
}

export default Base;
