import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Modal, { closeStyle } from "simple-react-modal";
import DontGo from '../DontGo/DontGo'


const NavItem = props =>{
  const pageURI = window.location.pathname+window.location.search;
  const liClassName = (props.path === pageURI) ? "nav-item-active" : "navitem";

  return(
    <li className={liClassName}>
      <Link className="nav-link" to={props.path}>{props.name}{(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}</Link>
    </li>
  );
}


 
export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = JSON.parse(localStorage.getItem("amaroDontGo"))||{ goingOut: false, modalShowed: false };
  }

  pleaseDontGo = () => {
    this.setState({
      goingOut: true
    });
  };

  close() {
    this.setState({ goingOut: false, modalShowed: true });
    localStorage.setItem(
      "amaroDontGo",
      JSON.stringify({ goingOut: false, modalShowed: true })
    );
    
  }

  render() {
    return (
      <>
        {this.state.goingOut && !this.state.modalShowed ? (
          <Modal
            className=""
            style={{}}
            containerStyle={{}}
            containerClassName="test"
            closeOnOuterClick={true}
            show={this.state.goingOut}
            onClose={this.close.bind(this)}
          >
            <button
              style={closeStyle}
              onClick={this.close.bind(this)}
            >
              X
            </button>
            <DontGo />
          </Modal>
        ) : (
          ""
        )}
        <nav
          onMouseLeave={this.pleaseDontGo}
          className="navbar navbar-expand-lg navbar-light bg-white"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <NavItem path="/" name="Catalogo" />
              <NavItem path="/carrinho" name="Carrinho" />
            </ul>
          </div>
        </nav>
      </>
    );
  }
}


