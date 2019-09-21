import React, {Component} from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Catalog from '../components/Catalog/Catalog';

import './Home.css';
export default class Home extends Component {
  
  render(){
  return (
    <div>
      <NavigationBar />,
      <Catalog />
    </div>
      
  );
  }
}
