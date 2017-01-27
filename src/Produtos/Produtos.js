import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Item } from '../../components/Item';
import products from '../../data/products.json';

export class  App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.state.products = products;
        this.state.tabs = [
            {
                name:'TODOS',
                active:true
            },
            {
                name:'OFERTAS',
                active:false,
                filter: {
                    on_sale : true
                }
            }
        ];
        this.setTab = this.setTab.bind(this);
    }
    /**
     * Seta a tab e faz o filtro se nescessário
     * @param {Number}
     */
    setTab(index){
        let tabs = this.state.tabs;
        for (let i in tabs) {
            i == index ? tabs[i].active = true : tabs[i].active = false;
        }
        let filtred = [];
        if(tabs[index].filter){
            for(let p in products){
                if(products[p].on_sale == tabs[index].filter.on_sale){
                     filtred.push(products[p]);
                }
            }
        }
        this.setState({
            tabs : tabs,
            products: filtred.length == 0 ? products : filtred
        });
    }

    render(){
        return (
            <div>
                <Header title={'AMARO'} name={'Produtos'} showHeader={true} />
                { /* TABS */ }
                <div className={'tabs'}>
                    {
                        this.state.tabs.map((tab, index) => {
                            return (
                                <div key={index} className={`tab ${tab.active ? 'tab-active' : ''}`} onClick={ () => this.setTab(index) }>
                                    { tab.name }
                                </div>
                            );
                        })
                    }
                </div>
                {/* PRODUTOS */}
                <Grid>
                    {
                        this.state.products.map((product, index) => {
                            return (
                                <Col xs={12} md={4} sm={6} key={ index }>
                                    <div className={'card'}>
                                        <Item product={product}/>
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Grid>
                <Footer />
            </div>
        );
    }
}