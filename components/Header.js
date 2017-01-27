/* global localStorage */
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          open: false,
          header:false,
          cart: localStorage.cart ? JSON.parse(localStorage.cart) : [],
          total:0
        };
        // Bind
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap     = this.handleTouchTap.bind(this);
        this.activeHeader       = this.activeHeader.bind(this);
        this.updateCart         = this.updateCart.bind(this);
        this.removeItem         = this.removeItem.bind(this);
        this.setTotal           = this.setTotal.bind(this);
        this.getCart            = this.getCart.bind(this);
    }

    componentDidMount() {
        // Get position scroll page
        window.addEventListener('scroll', (event)=>{
            this.activeHeader(event.target);
        });
    }

    setTotal(total) {
        this.setState({total:total});
    }

    removeItem(item){
        let cart = this.state.cart;
        var index = cart.indexOf(item);
        if(index > -1){
            cart.splice(index, 1);
            this.setState({ cart : cart });
        }
    }

    /**
     * Pega os itens do carriho e joga no estado "cart"
     */
    getCart(){
        this.setState({cart : localStorage.cart ? JSON.parse(localStorage.cart) : []});
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
    /**
     * Estiliza o header
     */
    activeHeader(page){
        let pos = page.scrollingElement.scrollTop;
        this.setState({header: pos > 400 ? true : false });
    }
    /**
     * Abre o popover do carrinho
     */
    handleTouchTap (event) {
        event.preventDefault();
        let self = this;
        this.getCart();
        self.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    }
    /**
     * Fecha o popover e atualiza as informações no localStorage
     */
    handleRequestClose(){
        localStorage.cart = JSON.stringify(this.state.cart);
        this.setState({
            open: false
        });
    }
    /**
     * Calcula o total e formta o valor
     * @return {String}
     */
    getTotal(){
        let cart = this.state.cart;
        let total = 0;
        for (var i in cart) {
            total += cart[i].price * cart[i].qtde;
        }
        return String(`R$ ${total.toFixed(2)}`).replace('.', ',');
    }
    
    render(){
        return (
            <div>
                <div className={`header-app ${this.state.header ? '' : 'disable-header'}`}>
                    <div className={'title'}> { this.props.title } </div>
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
                                            //Render cart itens
                                            this.state.cart.map((item, index) => {
                                                return (
                                                    <div key={index} className={'cart-item'}>
                                                        <div className={'cart-item-name'}>{`x${item.qtde} ${item.name}`}</div>
                                                        <label className={'cart-options'} onClick={() => this.updateCart(item, true)}>+</label>
                                                        { item.qtde != 1 ? 
                                                            <label className={'cart-options'} onClick={() => this.updateCart(item, false)}>-</label>
                                                        : 
                                                            <label className={'cart-options remove-item'} onClick={() => this.removeItem(item)}>x</label>
                                                        }
                                                    </div>
                                                );
                                            })
                                        }
                                </div>
                                <div className={'total'}>{ this.getTotal() }</div>
                                <button className={'cart-button'} onClick={ () => alert('Ha Ha - Nelson') }>
                                    FINALIZAR
                                </button>
                            </div>
                        </Popover>
                    </div>
                </div>
                <div className={'header-image'}>
                    <span className={'marca-name'}> AMARO </span>
                </div>
                <div className={'name'}> { this.props.name } </div>
            </div>
        );
    }
}