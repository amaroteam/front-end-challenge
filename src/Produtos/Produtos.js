import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import { Header } from '../../components/Header';
import { Item } from '../../components/Item';
import products from '../../data/products.json';

export class  App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.state.products = products;
        console.log(products);
    }

    render(){
        return (
            <div>
                <Header title={'AMARO'} name={'Produtos'} showHeader={true} />
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
            </div>
        );
    }
}