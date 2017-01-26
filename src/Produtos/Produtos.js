import React from 'react';
import { Header } from '../../components/Header';
import products from '../../data/products.json';

export class  App extends React.Component {
    constructor(props){
        super(props);
        setTimeout(()=>{
            console.log(products);
        }, 5000);
    }
    render(){
        return (
            <div>
                <Header title={'Produtos'} />
                Produtos
            </div>
        );
    }
}