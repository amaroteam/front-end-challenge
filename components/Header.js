/* global localStorage */

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          open: false,
          header:false,
          cart: localStorage.cart ? JSON.parse(localStorage.cart) : [] 
        };
        // Bind
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.activeHeader = this.activeHeader.bind(this);
        this.getCart = this.getCart.bind(this);
        this.updateCart = this.updateCart.bind(this);
    }

    componentDidMount() {
        // Get pos scroll page
        window.addEventListener('scroll', (event)=>{
            this.activeHeader(event.target);
        });
    }

    /**
     * Pega os itens do carriho e joga no estado
     * @Param {Function} callback
     */
    getCart(callback){
        this.setState({cart : localStorage.cart ? JSON.parse(localStorage.cart) : []});
        callback();
    }

    updateCart(item, add){
        let cart = this.state.cart;
        for (var i in cart) {
            if(cart[i].name == item.name){
                add ?  cart[i].qtde++ : cart[i].qtde-- ;
                break;
            }
        }
        this.setState({cart:cart});
    }

    activeHeader(page){
        let pos = page.scrollingElement.scrollTop;
        this.setState({header: pos > 400 ? true : false });
    }

    handleTouchTap (event) {
        event.preventDefault();
        let self = this;
        this.getCart(() => {
            self.setState({
                open: true,
                anchorEl: event.currentTarget,
            });
        });
    }

    handleRequestClose(){
        this.setState({
            open: false,
        });
    }
    
    render(){
        return (
            <div>
                <div className={`header-app ${this.state.header ? '' : 'disable-header'}`}>
                    <div className={'title'}>
                        { this.props.title }
                    </div>
                    <div className={'cart-icon'}>
                        <FlatButton
                            onTouchTap={this.handleTouchTap}
                            label=""
                            icon={<i style={{color:'#ffffff'}} className="ion-ios-cart"></i>}
                        />
                        <Popover
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            onRequestClose={this.handleRequestClose}
                        >
                            <div className={'cart-menu'}>
                                <div className={'content'}>
                                    {
                                        // Render cart itens
                                        this.state.cart.map((item, index) => {
                                            return (
                                                <div key={index} className={'cart-item'}>
                                                    <div className={'cart-item-name'}>{`x${item.qtde} ${item.name}`}</div>
                                                    <label className={'cart-options'} onClick={() => this.updateCart(item, true)}>+</label>
                                                    { item.qtde != 1 ? 
                                                        <label className={'cart-options'} onClick={() => this.updateCart(item, false)}>-</label>
                                                    : ''}
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </Popover>
                    </div>
                </div>
                <div className={'header-image'}>
                    <span className={'marca-name'}>
                        AMARO
                    </span>
                </div>
                <div className={'name'}>
                    { this.props.name }
                </div>
            </div>
        );
    }
}