import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const NavItem = props =>{
  const pageURI = window.location.pathname+window.location.search;
  const liClassName = (props.path === pageURI) ? "nav-item-active" : "navitem";
  //const aClassName = props.disabled ? "nav-link disabled" : "nav-link"

  return(
    <li className={liClassName}>
      <Link className="nav-link" to={props.path}>{props.name}{(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}</Link>
    </li>
  );
}

export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        {/* <a className="navbar-brand" href="">BR PILOT</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItem path="/" name="Catalogo" />
            <NavItem path="/carrinho" name="Carrinho" />
          </ul>
          
        </div>
      </nav>

    );
  }
}


